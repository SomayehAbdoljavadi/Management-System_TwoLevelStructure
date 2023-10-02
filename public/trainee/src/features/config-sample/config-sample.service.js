import {inject} from 'aurelia-dependency-injection';
import {ConfigHttp} from './config-sample.http';
import {firstConfig, secondConfig} from './config-sample.actions';
import {Store} from 'aurelia-store';
import {paLoadings} from '../../pa-loading-action';

@inject(ConfigHttp, Store)
export class ConfigService {
  constructor(configHttp, store) {
    this.configHttp = configHttp;
    this.store = store;
    this.subscription = this.store.state.subscribe(
      (state) => this.state = state
    );
  }

  firstConfig(data) {
    this.store.dispatch(paLoadings, 'firstConfig', true);
    this.configHttp.firstConfig(data)
      .then(response => this.store.dispatch(firstConfig, response));
  }

  secondConfig(data) {
    this.store.dispatch(paLoadings, 'secondConfig', true);
    this.configHttp.secondConfig(data)
      .then(response => this.store.dispatch(secondConfig, response));
  }
}
