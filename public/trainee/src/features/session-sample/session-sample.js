import {inject} from 'aurelia-dependency-injection';
import {NewInstance} from 'aurelia-framework';
import {connectTo, Store} from 'aurelia-store';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {pluck} from 'rxjs/operators';
import {SessionService} from './session-sample.service';
import {SESSION_CONST} from "./session-sample.constants"
import {SessionData} from "./session-sample.models"
import {Notification} from '../../utilities/services/notification.service';


@connectTo({
  selector: {
    _action: (store) => store.state.pipe(pluck('action')),
    _getDataFromSession: (store) => store.state.pipe(pluck('getDataFromSession')),
    _saveDataInSession: (store) => store.state.pipe(pluck('saveDataInSession')),
    _removeSession: (store) => store.state.pipe(pluck('removeSession')),
  }
})
@inject(Store, NewInstance.of(ValidationController), SessionService, Notification)
export class SessionSample {
  constructor(store, vController, sessionService, notification) {
    this.store = store;
    this.notification = notification;
    this.sessionService = sessionService;
    this.vController = vController;
    this.vController.validateTrigger = validateTrigger.changeOrBlur;
    this.getDataFromSessionResult = '';
    this.saveDataInSessionResult = '';
    this.removeSessionResult = '';
    this.sessionData = new SessionData();
    this.token = '';

  }
  view_json_get(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-get').jsonViewer(data, { collapsed: false, withQuotes: true });
  }
  view_json_set(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-post').jsonViewer(data, { collapsed: false, withQuotes: true });
  }
  view_json_delete(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-delete').jsonViewer(data, { collapsed: false, withQuotes: true });
  }
  _actionChanged(action) {
    this.action = action || {};
  }

  _getDataFromSessionChanged(newState, oldState) {
    if (this.action.name === SESSION_CONST.getDataFromSession.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      if (newState.data.message !== undefined) {
        this.getDataFromSessionResult = newState.data.message.fa;
      } else {
        this.getDataFromSessionResult = JSON.stringify(newState.data.myKey);
        this.getDataFromSession = newState;
        this.view_json_get(this.getDataFromSession);
      }
    }
  }

  _saveDataInSessionChanged(newState, oldState) {
    if (this.action.name === SESSION_CONST.saveDataInSession.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }

      if (newState.data.message !== undefined) {
        this.saveDataInSessionResult = newState.data.message.fa;
      } else {
        this.saveDataInSessionResult = JSON.stringify(newState.data.result);
        this.token = newState.data.token;
        this.tokenState = newState;
        this.view_json_set(this.tokenState);
      }
    }
  }

  _removeSessionChanged(newState, oldState) {
    if (this.action.name === SESSION_CONST.removeSession.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      if (newState.data.message !== undefined) {
        this.removeSessionResult = newState.data.message.fa;
      } else {
        this.removeSessionResult = newState.data.msg;
        this.removeSessionResultState = newState;
        this.view_json_delete(this.removeSessionResultState);
      }
    }
  }

  attached() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }


    var acc = document.getElementsByClassName("inneraccordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var innerpanel = this.nextElementSibling;
        if (innerpanel.style.display === "block") {
          innerpanel.style.display = "none";
        } else {
          innerpanel.style.display = "block";
        }
      });
    }
  }

  getDataFromSession() {
    this.sessionService.getDataFromSession(this.token);
  }

  removeSession() {
    this.sessionService.removeSession(this.token);
  }

  saveDataInSession() {
    this.vController.validate().then((result) => {
      if (result.valid) {
        this.sessionService.saveDataInSession({"myKey1": this.sessionData.key1, "myKey2": this.sessionData.key2});
      }
    });
  }
}
