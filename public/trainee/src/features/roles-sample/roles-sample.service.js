import {inject} from 'aurelia-dependency-injection';
import {RoleHttp} from './roles-sample.http';
import {selectRole, getRole} from './roles-sample.actions';
import {Store} from 'aurelia-store';
import {paLoadings} from '../../pa-loading-action';

@inject(RoleHttp, Store)
export class RoleService {
  constructor(roleHttp, store) {
    this.roleHttp = roleHttp;
    this.store = store;
    this.subscription = this.store.state.subscribe(
      (state) => this.state = state
    );
  }

  selectRole(data) {
    this.store.dispatch(paLoadings, 'selectRole', true);
    this.roleHttp.selectRole(data)
      .then(response => this.store.dispatch(selectRole, response));
  }

  getRole(data) {
    this.store.dispatch(paLoadings, 'getRole', true);
    this.roleHttp.getRole(data)
      .then(response => this.store.dispatch(getRole, response));
  }
}
