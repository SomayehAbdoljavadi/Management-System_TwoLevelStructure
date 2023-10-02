import {ValidationRules} from 'aurelia-validation';

export class FirstConfig {
  constructor() {
    ValidationRules
      .ensure('username')
      .displayName('Username')
      .required()
      .on(this);
  }

  static fromObject(src) {
    return Object.assign(new FirstConfig(), src);
  }

  username = '';
}

export class SecondConfig {
  constructor() {
    ValidationRules
      .ensure('username')
      .displayName('Username')
      .required()
      .on(this);
  }

  static fromObject(src) {
    return Object.assign(new SecondConfig(), src);
  }

  username = '';
}

