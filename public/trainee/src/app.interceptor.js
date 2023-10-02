import {inject} from 'aurelia-dependency-injection';
import {PLATFORM} from 'aurelia-framework';

const location = PLATFORM.location || window.location;

@inject()
export class AppInterceptor {
  constructor() {
  }

  request(request) {
    return request;
  }

  requestError(request) {
    return Promise.reject(request);
  }

  response(response) {
    return response.json();
  }

  responseError(response) {
    switch (response.status) {
      case 302://forbidden
      case 401://Unauthorized
        location.href = '#/login';
        break;
      case 403://forbidden
        break;
      default:
    }
    return Promise.resolve(response.json());
  }
}

export class AppInterceptorRawResponse extends AppInterceptor { // BE CAREFUL, for non JSON responses only
  response(response) {
    return response;
  }
}
