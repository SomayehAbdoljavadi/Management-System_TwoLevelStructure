import {inject} from 'aurelia-dependency-injection';
import {HttpClient, json} from 'aurelia-fetch-client';
import {APP_CONST} from './app-sample.constants';

@inject(HttpClient)
export class AppHttp {
  constructor(http) {
    this.http = http;
  }

  systemTime() {
    return this.http.fetch(APP_CONST.systemTime.url, {
      method: 'GET'
    });
  }

  timeOut(data) {
    return this.http.fetch(APP_CONST.timeOut.url, {
      method: 'POST',
      body: json(data)
    });
  }
}
