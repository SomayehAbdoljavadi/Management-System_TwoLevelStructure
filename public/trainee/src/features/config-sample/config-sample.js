import {inject} from 'aurelia-dependency-injection';
import {NewInstance} from 'aurelia-framework';
import {connectTo, Store} from 'aurelia-store';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {pluck} from 'rxjs/operators';
import {ConfigService} from './config-sample.service';
import {Config_CONST} from './config-sample.constants';
import {SecondConfig, FirstConfig} from './config-sample.models';
import {Notification} from '../../utilities/services/notification.service';


@connectTo({
  selector: {
    _action: (store) => store.state.pipe(pluck('action')),
    _firstConfig: (store) => store.state.pipe(pluck('firstConfig')),
    _secondConfig: (store) => store.state.pipe(pluck('secondConfig')),

  }
})
@inject(Store, NewInstance.of(ValidationController), ConfigService, Notification)
export class ConfigSample {
  constructor(store, vController, configService, notification) {
    this.store = store;
    this.notification = notification;
    this.vController = vController;
    this.configService = configService;
    this.vController.validateTrigger = validateTrigger.changeOrBlur;
    this.secondConfigResult = '';
    this.firstConfigResult = '';
    this.firstConfig = new FirstConfig();
    this.secondConfig = new SecondConfig();

  }
  view_json_put(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-put').jsonViewer(data, { collapsed: false, withQuotes: true });
  }
  view_json_put_second(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-put-second').jsonViewer(data, { collapsed: false, withQuotes: true });
  }
  _actionChanged(action) {
    this.action = action || {};
  }

  _firstConfigChanged(newState, oldState) {
    if (this.action.name === Config_CONST.firstConfig.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      if (newState.data.fa !== undefined) {
        this.firstConfigResult = newState.data.message.fa;
      } else {
        this.firstConfigResult = JSON.stringify(newState.data);
        this.firstConfigResultState = newState;
        this.view_json_put(this.firstConfigResultState);
      }
    }
  }

  _secondConfigChanged(newState, oldState) {
    if (this.action.name === Config_CONST.secondConfig.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      if (newState.data.fa !== undefined) {
        this.secondConfigResult = newState.data.message.fa;
      } else {
        this.secondConfigResult = JSON.stringify(newState.data);
        this.secondConfigResultState = newState;
        this.view_json_put_second(this.secondConfigResultState);
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

  setFirstConfig() {
    this.vController.validate({object: this.firstConfig}).then((result) => {
      if (result.valid) {
        this.configService.firstConfig(this.firstConfig);
      }
    });
  }

  setSecondConfig() {
    this.vController.validate({object: this.secondConfig}).then((result) => {
      if (result.valid) {
        this.configService.secondConfig(this.secondConfig);
      }
    });
  }
}
