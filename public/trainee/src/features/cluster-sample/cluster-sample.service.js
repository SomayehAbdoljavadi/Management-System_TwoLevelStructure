import {inject} from 'aurelia-dependency-injection';
import {ClusterHttp} from './cluster-sample.http';
import {getTime, setCluster} from './cluster-sample.actions';
import {Store} from 'aurelia-store';
import {paLoadings} from '../../pa-loading-action';

@inject(ClusterHttp, Store)
export class ClusterService {
  constructor(clusterHttp, store) {
    this.clusterHttp = clusterHttp;
    this.store = store;
    this.subscription = this.store.state.subscribe(
      (state) => this.state = state
    );
  }

  getTime() {
    this.store.dispatch(paLoadings, 'getTime', true);
    this.clusterHttp.getTime()
      .then(response => this.store.dispatch(getTime, response));
  }

  setCluster(data) {
    this.store.dispatch(paLoadings, 'setCluster', true);
    this.clusterHttp.setCluster(data)
      .then(response => this.store.dispatch(setCluster, response));
  }
}
