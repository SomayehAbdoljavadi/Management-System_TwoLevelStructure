import {inject} from 'aurelia-dependency-injection';
import {HttpClient, json} from 'aurelia-fetch-client';
import {SAMPLES_CONST} from './samples.constants';

@inject(HttpClient)
export class SamplesHttp {
  constructor(http) {
    this.http = http;
  }

  login(data) {
    return this.http.fetch(SAMPLES_CONST.login.url, {
      method: 'POST',
      body: json(data)
    });
  }

}
