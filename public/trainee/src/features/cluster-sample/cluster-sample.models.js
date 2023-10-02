import {ValidationRules} from 'aurelia-validation';

export class ClusterModel {
  constructor() {
    ValidationRules
      .ensure('timeOut')
      .displayName('TimeOut')
      .required()
      .on(this);
  }

  static fromObject(src) {
    return Object.assign(new SetTimeOut(), src);
  }

  timeOut = '';
}

