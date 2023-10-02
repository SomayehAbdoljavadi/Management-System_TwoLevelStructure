import {inject} from 'aurelia-dependency-injection';
import {Store} from 'aurelia-store';
import {HttpClient} from 'aurelia-fetch-client';
import {Actions} from './app.actions';
import * as middlewares from './app.middlewares';
import {AppInterceptor} from "./app.interceptor";
import 'bootstrap/js/dist/dropdown';
// import '../../assets/js/jquery-3.3.1.min';
import '../../assets/sass/style.scss';
import 'toastr/build/toastr.css';
import './utilities/jsonEditor/jquery.json-viewer'
// import './utilities/jsonEditor/jquery.json-viewer.css'
import 'jquery.json-viewer/json-viewer/jquery.json-viewer.css'
import routes from './app.routes';
import {AureliaToastr} from '../src/features/component/aurelia-toastr'

@inject(Store, HttpClient, AppInterceptor, AureliaToastr)
export class App {
  constructor(store, http, interceptor, aureliaToastr) {
    this.store = store;
    this.interceptor = interceptor;
    this.http = http;

    this.initializeHttp();
  }

  configureRouter(config, router) {
    config.map(routes);
    this.router = router;
  }

  activate() {
    this.registerActions();
    this.registerMiddleWares();
  }

  registerActions() {
    for (let action in Actions) {
      if (Actions.hasOwnProperty(action)) {
        this.store.registerAction(action, Actions[action]);
      }
    }
  }

  unregisterActions() {
    for (let action in Actions) {
      if (Actions.hasOwnProperty(action)) {
        this.store.unregisterAction(Actions[action]);
      }
    }
  }

  registerMiddleWares() {
    for (let middleware in middlewares) {
      this.store.registerMiddleware(middlewares[middleware].callback, middlewares[middleware].placement, middlewares[middleware].settings);
    }
  }

  unregisterMiddleWares() {
    for (let middleware in middlewares) {
      this.store.unregisterMiddleware(middlewares[middleware].callback);
    }
  }

  initializeHttp() {
    this.http.configure(config => {
      config
        .useStandardConfiguration()
        .withInterceptor(this.interceptor);
    });
  }

  deactivate() {
    this.unregisterActions();
    this.unregisterMiddleWares();
  }
}


