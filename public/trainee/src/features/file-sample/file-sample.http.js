import {inject,NewInstance} from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-fetch-client';
import {FILE_CONST} from './file-sample.constants';
import { AppInterceptorRawResponse } from '../../app.interceptor';

@inject(HttpClient, NewInstance.of(HttpClient), AppInterceptorRawResponse)
export class FileHttp {
  constructor(http, rawHttp, rawInterceptor) {
    this.http = http;
    this.rawInterceptor = rawInterceptor;
    this.rawHttp = rawHttp;
    this.rawHttp.configure(config => {
      config
        .useStandardConfiguration()
        .withInterceptor(this.rawInterceptor);
    });
  }

  getPicture() {
    return this.rawHttp.fetch(FILE_CONST.getPicture.url, {
      method: 'GET'
    });
  }

  getTxtFile() {
    return this.rawHttp.fetch(FILE_CONST.getTxtFile.url, {
      method: 'GET'
    });
  }

  getExcelFile() {
    return this.rawHttp.fetch(FILE_CONST.getExcelFile.url, {
      method: 'GET'
    });
  }

}
