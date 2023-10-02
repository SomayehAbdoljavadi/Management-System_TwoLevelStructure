import {ValidationRules} from 'aurelia-validation';

export class SetTimeOut {
  constructor() {
    ValidationRules
      .ensure('milisecond')
      .displayName('TimeOut')
      .required()
      .on(this);
  }

  static fromObject(src) {
    return Object.assign(new SetTimeOut(), src);
  }

  milisecond = '';
}

