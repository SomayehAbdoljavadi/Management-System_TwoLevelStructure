import {inject} from 'aurelia-dependency-injection';
import {HttpClient, json} from 'aurelia-fetch-client';
import {SCHEMA_CONST} from './schema.constants';

@inject(HttpClient)
export class SchemaHttp {
  constructor(http) {
    this.http = http;
  }

  schemaEasy(data) {
    return this.http.fetch(SCHEMA_CONST.schemaEasy.url, {
      method: 'POST',
      body: json(data)
    });
  }

  schemaHard(data) {
    return this.http.fetch(SCHEMA_CONST.schemaHard.url, {
      method: 'POST',
      body: json(data)
    });
  }
}
