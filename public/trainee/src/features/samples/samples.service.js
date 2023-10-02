import {inject} from 'aurelia-dependency-injection';
import {SamplesHttp} from './samples.http';
import {getCaptcha, paLoadings} from './samples.actions';
import {Store} from 'aurelia-store';

@inject(SamplesHttp, Store)
export class AccountService {
  constructor(samplesHttp, store) {
    this.samplesHttp = samplesHttp;
    this.store = store;
    this.subscription = this.store.state.subscribe(
      (state) => this.state = state
    );
  }

  login(data) {
    this.store.dispatch(paLoadings, 'login', true);
    this.samplesHttp.login(data)
      .then(response => this.store.dispatch(getCaptcha, response));
  }
}
