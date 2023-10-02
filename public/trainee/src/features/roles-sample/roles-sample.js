import {inject} from 'aurelia-dependency-injection';
import {NewInstance} from 'aurelia-framework';
import {connectTo, Store} from 'aurelia-store';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {pluck} from 'rxjs/operators';
import {ROLE_CONST} from "./roles-sample.constants"
import {RoleService} from "./roles-sample.service"
import {UserModel, RoleModel} from "./roles-sample.models"
import {Notification} from '../../utilities/services/notification.service';


@connectTo({
  selector: {
    _action: (store) => store.state.pipe(pluck('action')),
    _selectRole: (store) => store.state.pipe(pluck('selectRole')),
    _getRole: (store) => store.state.pipe(pluck('getRole')),

  }
})
@inject(Store, NewInstance.of(ValidationController), RoleService, Notification)
export class RolesSample {
  constructor(store, vController, roleService, notification) {
    this.store = store;
    this.notification = notification;
    this.vController = vController;
    this.roleService = roleService;
    this.selectRoleResult = '';
    this.getRoleResult = '';
    this.userModel = new UserModel();
    this.roleModel = new RoleModel();
    this.vController.validateTrigger = validateTrigger.changeOrBlur;

  }
  view_json_set(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-post').jsonViewer(data, { collapsed: false, withQuotes: true });
  }
  view_json_select(data) {
    console.log(data);
    var data = {
      "result": data,
    };
    $('#json-select').jsonViewer(data, { collapsed: false, withQuotes: true });
  }
  _actionChanged(action) {
    this.action = action || {};
  }
  _selectRoleChanged(newState, oldState) {
    if (this.action.name === ROLE_CONST.selectRole.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      if (newState.data.fa !== undefined) {
        this.selectRoleResult = newState.data.message.fa;
      } else {
        this.selectRoleResult = JSON.stringify(newState.data.result);
        this.selectRoleResultState = newState;
        this.view_json_select(this.selectRoleResultState);
      }
    }
  }

  _getRoleChanged(newState, oldState) {
    if (this.action.name === ROLE_CONST.getRole.action.name) {
      if (newState.status === 'error') {
        this.notification.error(newState.error.message.fa)
        return;
      }
      if (newState.data.fa !== undefined) {
        this.getRoleResult = newState.data.fa;
      } else {
        this.getRoleResult = newState.data.msg;
        this.getRoleResultState = newState;
        this.view_json_set(this.getRoleResultState);
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

  saveRole() {
    this.vController.validate({object: this.userModel}).then((result) => {
      if (result.valid) {
        this.roleService.getRole(this.userModel);
      }
    });
  }

  selectRole() {
    this.vController.validate({object: this.roleModel}).then((result) => {
      if (result.valid) {
        this.roleService.selectRole(this.roleModel);
      }
    });
  }
}
