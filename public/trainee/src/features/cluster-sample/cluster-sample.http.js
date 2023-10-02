import {inject} from 'aurelia-dependency-injection';
import {HttpClient,json} from 'aurelia-fetch-client';
import {CLUSTER_CONST} from './cluster-sample.constants';

@inject(HttpClient)
export class ClusterHttp {
  constructor(http) {
    this.http = http;
  }

  getTime() {
    return this.http.fetch(CLUSTER_CONST.getTime.url, {
      method: 'GET'
    });
  }

  setCluster(data) {
    return this.http.fetch(CLUSTER_CONST.setCluster.url, {
      method: 'POST',
      body: json(data)
    });
  }
}
