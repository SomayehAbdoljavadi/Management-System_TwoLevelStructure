import {inject} from 'aurelia-dependency-injection';
import {HttpClient, json} from 'aurelia-fetch-client';
import {SESSION_CONST} from './session-sample.constants';

@inject(HttpClient)
export class SessionHttp {
  constructor(http) {
    this.http = http;
  }

  getDataFromSession(token) {
    return this.http.fetch(SESSION_CONST.getDataFromSession.url, {
      method: 'GET',
      headers: new Headers({
        'token': token
      }),
    });
  }

  saveDataInSession(data) {
    return this.http.fetch(SESSION_CONST.saveDataInSession.url, {
      method: 'POST',
      body: json(data)
    });
  }

  removeSession(token) {
    return this.http.fetch(SESSION_CONST.removeSession.url, {
      method: 'DELETE',
      headers: new Headers({
        'token': token
      }),
    });
  }
}
