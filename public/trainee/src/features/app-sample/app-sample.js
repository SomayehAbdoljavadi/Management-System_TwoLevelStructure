import {inject} from 'aurelia-dependency-injection';
import {NewInstance} from 'aurelia-framework';
import {connectTo, Store} from 'aurelia-store';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {pluck} from 'rxjs/operators';
import {APP_CONST} from "./app-sample.constants"
import {SampleAppService} from "./app-sample.service"
import {TimeOut} from "./app-sample.models"
import {Notification} from '../../utilities/services/notification.service';


@connectTo({
  selector: {
    _action: (store) => store.state.pipe(pluck('action')),
    _systemTime: (store) => store.state.pipe(pluck('systemTime')),
    _timeOut: (store) => store.state.pipe(pluck('timeOut')),

  }
})
@inject(Store, NewInstance.of(ValidationController), SampleAppService, Notification)
export class AppSample {
  constructor(store, vController, sampleAppService, notification) {
    this.store = store;
    this.notification = notification;

    this.vController = vController;
    this.sampleAppService = sampleAppService;
    this.vController.validateTrigger = validateTrigger.changeOrBlur;
    this.systemTimeResult = ''
    this.timeOutResult = ''
    this.timeOut = new TimeOut();

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
  _actionChanged(action) {
    this.action = action || {};
  }

  _systemTimeChanged(newState, oldState) {
    if (this.action.name === APP_CONST.systemTime.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }

      if (newState.data.message !== undefined) {
        this.systemTimeResult = newState.data.message.fa;
      } else {
        this.systemTimeResult = newState.data.time;
        this.systemTimeResultState = newState;
        this.view_json_get(this.systemTimeResultState);
      }
    }
  }

  _timeOutChanged(newState, oldState) {
    if (this.action.name === APP_CONST.timeOut.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }

      if (newState.data.message !== undefined) {
        this.timeOutResult = newState.data.message.fa;
      } else {
        this.timeOutResult = newState.data.timeOut;
        this.timeOutResultState = newState;
        this.view_json_set(this.timeOutResultState);
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

  systemTime() {
    this.sampleAppService.systemTime();
  }

  getTimeOut() {
    this.vController.validate().then((result) => {
      if (result.valid) {
        this.sampleAppService.timeOut({milisecond: +this.timeOut.milisecond});
      }
    });
  }
}
