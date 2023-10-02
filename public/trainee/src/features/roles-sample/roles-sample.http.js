import {inject} from 'aurelia-dependency-injection';
import {HttpClient, json} from 'aurelia-fetch-client';
import {ROLE_CONST} from './roles-sample.constants';

@inject(HttpClient)
export class RoleHttp {
  constructor(http) {
    this.http = http;
  }

  getRole(data) {
    return this.http.fetch(ROLE_CONST.getRole.url, {
      method: 'POST',
      body: json(data)
    });
  }

  selectRole(data) {
    return this.http.fetch(ROLE_CONST.selectRole.url, {
      method: 'POST',
      body: json(data)
    });
  }
}
