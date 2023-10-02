import {inject} from 'aurelia-dependency-injection';
import {FileHttp} from './file-sample.http';
import {getPicture, getExcelFile, getTxtFile} from './file-sample.actions';
import {Store} from 'aurelia-store';
import {paLoadings} from '../../pa-loading-action';

@inject(FileHttp, Store)
export class FileService {
  constructor(fileHttp, store) {
    this.fileHttp = fileHttp;
    this.store = store;
    this.subscription = this.store.state.subscribe(
      (state) => this.state = state
    );
  }

  getPicture() {
    this.store.dispatch(paLoadings, 'getPicture', true);
    this.fileHttp.getPicture()
      .then(response => {
        this.store.dispatch(getPicture, response)
      });
  }

  getTxtFile() {
    this.store.dispatch(paLoadings, 'getTxtFile', true);
    this.fileHttp.getTxtFile()
      .then(response => this.store.dispatch(getTxtFile, response));
  }

  getExcelFile() {
    this.store.dispatch(paLoadings, 'getExcelFile', true);
    this.fileHttp.getExcelFile()
      .then(response => this.store.dispatch(getExcelFile, response));
  }
}
