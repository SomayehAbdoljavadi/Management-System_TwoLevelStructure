import {inject} from 'aurelia-dependency-injection';
import {AppHttp} from './app-sample.http';
import {systemTime, timeOut} from './app-sample.actions';
import {Store} from 'aurelia-store';
import {paLoadings} from '../../pa-loading-action';

@inject(AppHttp, Store)
export class SampleAppService {
  constructor(appHttp, store) {
    this.appHttp = appHttp;
    this.store = store;
    this.subscription = this.store.state.subscribe(
      (state) => this.state = state
    );
  }

  systemTime() {
    this.store.dispatch(paLoadings, 'systemTime', true);
    this.appHttp.systemTime()
      .then(response => this.store.dispatch(systemTime, response));
  }

  timeOut(data) {
    this.store.dispatch(paLoadings, 'timeOut', true);
    this.appHttp.timeOut(data)
      .then(response => this.store.dispatch(timeOut, response));
  }
}
