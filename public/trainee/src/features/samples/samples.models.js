import {ValidationRules} from 'aurelia-validation';
import {Utilities} from '../../utilities/utilities';

export class User {
  constructor() {
    ValidationRules
      .ensure('username')
      .displayName('نام کاربری (کدملی)')
      .required()
      .satisfiesRule('isNationalCode')

      .ensure('password')
      .required()

      .ensure('selectedProductId')
      .required()
      .on(this);
  }

  static fromObject(src) {
    return Object.assign(new User(), src);
  }

  username = '';
  password = '';
  remmberMe = false;
  selectedProductId = null;
}

