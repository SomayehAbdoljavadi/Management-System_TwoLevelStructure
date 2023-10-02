import {inject} from 'aurelia-dependency-injection';
import {ServiceHttp} from './services-sample.http';
import {getSystemTime, setTimeOut} from './services-sample.actions';
import {Store} from 'aurelia-store';
import {paLoadings} from '../../pa-loading-action';

@inject(ServiceHttp, Store)
export class SampleService {
  constructor(serviceHttp, store) {
    this.serviceHttp = serviceHttp;
    this.store = store;
    this.subscription = this.store.state.subscribe(
      (state) => this.state = state
    );
  }

  getSystemTime() {
    this.store.dispatch(paLoadings, 'getSystemTime', true);
    this.serviceHttp.getSystemTime()
      .then(response => this.store.dispatch(getSystemTime, response));
  }

  setTimeOut(data) {
    this.store.dispatch(paLoadings, 'setTimeOut', true);
    this.serviceHttp.setTimeOut(data)
      .then(response => this.store.dispatch(setTimeOut, response));
  }
}
