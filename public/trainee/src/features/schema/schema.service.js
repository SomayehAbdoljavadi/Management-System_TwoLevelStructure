import {inject} from 'aurelia-dependency-injection';
import {SchemaHttp} from './schema.http';
import {schemaEasy, schemaHard} from './schema.actions';
import {Store} from 'aurelia-store';
import {paLoadings} from '../../pa-loading-action';

@inject(SchemaHttp, Store)
export class SchemaService {
  constructor(schemaHttp, store) {
    this.schemaHttp = schemaHttp;
    this.store = store;
    this.subscription = this.store.state.subscribe(
      (state) => this.state = state
    );
  }

  schemaHard(data) {
    this.store.dispatch(paLoadings, 'schemaHard', true);
    this.schemaHttp.schemaHard(data)
      .then(response => this.store.dispatch(schemaHard, response));
  }

  schemaEasy(data) {
    this.store.dispatch(paLoadings, 'schemaEasy', true);
    this.schemaHttp.schemaEasy(data)
      .then(response => this.store.dispatch(schemaEasy, response));
  }
}
