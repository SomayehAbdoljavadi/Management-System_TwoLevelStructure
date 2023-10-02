import { inject } from 'aurelia-dependency-injection';
import { NewInstance } from 'aurelia-framework';
import { connectTo, Store } from 'aurelia-store';
import { ValidationController, validateTrigger } from 'aurelia-validation';
import { pluck } from 'rxjs/operators';
import { SampleService } from './services-sample.service'
import { SERVICE_CONST } from './services-sample.constants'
import { SetTimeOut } from "./services-sample.models"
import { Notification } from '../../utilities/services/notification.service';


@connectTo({
  selector: {
    _action: (store) => store.state.pipe(pluck('action')),
    _getSystemTime: (store) => store.state.pipe(pluck('getSystemTime')),
    _setTimeOut: (store) => store.state.pipe(pluck('setTimeOut')),

  }
})
@inject(Store, NewInstance.of(ValidationController), SampleService, Notification)
export class ServicesSample {
  constructor(store, vController, sampleService, notification) {
    this.notification = notification;
    this.store = store;
    this.vController = vController;
    this.vController.validateTrigger = validateTrigger.changeOrBlur;
    this.sampleService = sampleService;
    this.getSystemTimeResult = ''
    this.setTimeOutResult = ''
    this.timeOut = new SetTimeOut();
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

  _getSystemTimeChanged(newState, oldState) {
    if (this.action.name === SERVICE_CONST.getSystemTime.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      if (newState.data.message !== undefined) {
        this.getSystemTimeResult = newState.data.message.fa;
      } else {
        this.getSystemTimeResult = newState.data.time;
        this.getSystemTimestate = newState;
        this.view_json_get(this.getSystemTimestate);
      }
    }
  }

  _setTimeOutChanged(newState, oldState) {
    if (this.action.name === SERVICE_CONST.setTimeOut.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      if (newState.data.message !== undefined) {
        this.setTimeOutResult = newState.data.message.fa;
      } else {
        this.setTimeOutResult = newState.data.timeOut;
        this.setTimeOutState = newState;
        this.view_json_set(this.setTimeOutState);
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

  getTime() {
    this.sampleService.getSystemTime();
  }

  setTimeOut() {
    this.vController.validate().then((result) => {
      if (result.valid) {
        this.sampleService.setTimeOut({milisecond: +this.timeOut.milisecond});
      }
    });
  }
}
