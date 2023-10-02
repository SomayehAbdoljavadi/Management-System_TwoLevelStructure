import {inject} from 'aurelia-dependency-injection';
import {HttpClient, json} from 'aurelia-fetch-client';
import {Config_CONST} from './config-sample.constants';

@inject(HttpClient)
export class ConfigHttp {
  constructor(http) {
    this.http = http;
  }

  firstConfig(data) {
    return this.http.fetch(Config_CONST.firstConfig.url, {
      method: 'PUT',
      body: json(data)
    });
  }

  secondConfig(data) {
    return this.http.fetch(Config_CONST.secondConfig.url, {
      method: 'PUT',
      body: json(data)
    });
  }
}
