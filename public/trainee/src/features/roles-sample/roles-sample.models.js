import {ValidationRules} from 'aurelia-validation';

export class RoleModel {
  constructor() {
    ValidationRules
      .ensure('role')
      .displayName('Role')
      .required()
      .on(this);
  }

  static fromObject(src) {
    return Object.assign(new RoleModel(), src);
  }

  role = '';
}

export class UserModel {
  constructor() {
    ValidationRules
      .ensure('username')
      .displayName('UserName')
      .required()
      .on(this);
  }

  static fromObject(src) {
    return Object.assign(new UserModel(), src);
  }

  username = '';
}

