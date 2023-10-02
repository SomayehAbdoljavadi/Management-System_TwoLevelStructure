import {inject} from 'aurelia-dependency-injection';
import {HttpClient,json} from 'aurelia-fetch-client';
import {SERVICE_CONST} from './services-sample.constants';

@inject(HttpClient)
export class ServiceHttp {
  constructor(http) {
    this.http = http;
  }

  getSystemTime() {
    return this.http.fetch(SERVICE_CONST.getSystemTime.url, {
      method: 'GET'
    });
  }

  setTimeOut(data) {
    return this.http.fetch(SERVICE_CONST.setTimeOut.url, {
      method: 'POST',
      body: json(data)
    });
  }
}
