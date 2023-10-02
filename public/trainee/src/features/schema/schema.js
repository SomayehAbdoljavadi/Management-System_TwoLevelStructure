import {inject} from 'aurelia-dependency-injection';
import {NewInstance} from 'aurelia-framework';
import {connectTo, Store} from 'aurelia-store';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {pluck} from 'rxjs/operators';
import {SchemaEasy, SchemaHardLegal, SchemaHardReal} from './schema.models'
import {SchemaService} from './schema.service'
import {SCHEMA_CONST} from "./schema.constants"
import {Notification} from '../../utilities/services/notification.service';


@connectTo({
  selector: {
    _action: (store) => store.state.pipe(pluck('action')),
    _schemaEasy: (store) => store.state.pipe(pluck('schemaEasy')),
    _schemaHard: (store) => store.state.pipe(pluck('schemaHard')),

  }
})
@inject(Store, NewInstance.of(ValidationController), SchemaService, Notification)
export class Schema {
  constructor(store, vController, schemaService, notification) {
    this.store = store;
    this.notification = notification;
    this.schemaService = schemaService;
    this.schemaEasyResult = '';

    this.vController = vController;
    this.vController.validateTrigger = validateTrigger.changeOrBlur;
    this.real = new SchemaHardReal();
    this.legal = new SchemaHardLegal();
    this.schemaEasy = new SchemaEasy();
    this.isReal = false
    this.isLegal = false
    this.schemaHardRealResult = '';
    this.schemaHardLegalResult = '';
  }
  view_json_post_easy(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-post-easy').jsonViewer(data, { collapsed: false, withQuotes: true });
  }
  view_json_post_hard_real(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-post-hard-real').jsonViewer(data, { collapsed: false, withQuotes: true });
  }
  view_json_post_hard_legal(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-post-hard-legal').jsonViewer(data, { collapsed: false, withQuotes: true });
  }

  _actionChanged(action) {
    this.action = action || {};
  }

  _schemaEasyChanged(newState, oldState) {
    if (this.action.name === SCHEMA_CONST.schemaEasy.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      this.schemaEasy.reset();
      this.schemaEasyResult = newState.data;   
      this.schemaEasyResultState = newState;   
      this.view_json_post_easy(this.schemaEasyResultState);
    }
  }

  _schemaHardChanged(newState, oldState) {
    if (this.action.name === SCHEMA_CONST.schemaHard.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      if (this.isReal) {
        this.schemaHardRealResult = newState.data;
        this.schemaHardRealResultState = newState;
        this.view_json_post_hard_real(this.schemaHardRealResultState);
        this.real.reset();
        this.isReal = false
      }

      if (this.isLegal) {
        this.schemaHardLegalResult = newState.data;
        this.schemaHardLegalResultState = newState.data;
        this.view_json_post_hard_legal(this.schemaHardLegalResultState);
        this.legal.reset();
        this.isLegal = false
      }


    }
  }

  activate() {
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

  schemaEasyRequest() {
    this.vController.validate({object: this.schemaEasy}).then((result) => {
      if (result.valid) {
        this.schemaEasy.job.averageSalary = parseInt(this.schemaEasy.job.averageSalary);

        this.schemaEasy.identityNumber = parseInt(this.schemaEasy.identityNumber);
        this.schemaEasy.mobiles = [this.schemaEasy.mobiles];
        this.schemaEasy.job.phones = [this.schemaEasy.job.phones];

        this.schemaService.schemaEasy(this.schemaEasy);
      }
    });
  }

  schemaHardRequest(obj) {
    this.vController.validate({object: obj}).then((result) => {
      if (result.valid) {
        let data = JSON.parse(JSON.stringify(obj));
        for (let key in data) {
          if (data[key] == '') {
            delete data[key];
          }
        }
        //نمایش در بخش مربوطه
        if (obj == this.real) {
          this.isReal = true;
        } else {
          this.isLegal = true;
        }
        this.schemaService.schemaHard(data);
      }
    });
  }
}
