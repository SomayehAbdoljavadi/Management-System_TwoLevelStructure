import {ValidationRules} from 'aurelia-validation';

export class SessionData {
  constructor() {
    ValidationRules
      .ensure('key1')
      .displayName('Key1')
      .required()

      .ensure('key2')
      .displayName('Key2')
      .required()
      .on(this);
  }

  static fromObject(src) {
    return Object.assign(new SessionData(), src);
  }

  key1 = '';
  key2 = '';
}

