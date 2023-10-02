import {inject} from 'aurelia-dependency-injection';
import {SessionHttp} from './session-sample.http';
import {getDataFromSession, removeSession, saveDataInSession} from './session-sample.actions';
import {Store} from 'aurelia-store';
import {paLoadings} from '../../pa-loading-action';

@inject(SessionHttp, Store)
export class SessionService {
  constructor(sessionHttp, store) {
    this.sessionHttp = sessionHttp;
    this.store = store;
    this.subscription = this.store.state.subscribe(
      (state) => this.state = state
    );
  }

  getDataFromSession(token) {
    this.store.dispatch(paLoadings, 'getDataFromSession', true);
    this.sessionHttp.getDataFromSession(token)
      .then(response => this.store.dispatch(getDataFromSession, response));
  }

  saveDataInSession(data) {
    this.store.dispatch(paLoadings, 'saveDataInSession', true);
    this.sessionHttp.saveDataInSession(data)
      .then(response => this.store.dispatch(saveDataInSession, response));
  }

  removeSession(token) {
    this.store.dispatch(paLoadings, 'removeSession', true);
    this.sessionHttp.removeSession(token)
      .then(response => this.store.dispatch(removeSession, response));
  }
}
