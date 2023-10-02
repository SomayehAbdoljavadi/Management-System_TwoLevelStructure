import {HttpClient} from 'aurelia-fetch-client';

export class PaHttpClient extends HttpClient {
  timeout = 30000;//30 seconds

  constructor() {
    super();
  }

  fetch(url, options = {}) {
    return Promise.race([
      super.fetch(url, options),
      new Promise((resolve, reject) =>
        setTimeout(() => resolve({status: 'error', message: 'timeout'}), (options.timeout || this.timeout))
      )
    ]);
  }
}
