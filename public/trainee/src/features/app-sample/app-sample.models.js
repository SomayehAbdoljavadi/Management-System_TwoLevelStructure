import {ValidationRules} from 'aurelia-validation';

export class TimeOut {
  constructor() {
    ValidationRules
      .ensure('milisecond')
      .displayName('timeOut')
      .required()
      .on(this);
  }

  static fromObject(src) {
    return Object.assign(new TimeOut(), src);
  }

  milisecond = '';
}

