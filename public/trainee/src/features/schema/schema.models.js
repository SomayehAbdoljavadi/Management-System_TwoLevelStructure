import {ValidationRules} from 'aurelia-validation';

export class SchemaHardReal {
  constructor() {
    ValidationRules
      .ensure('firstName')
      .displayName('نام')
      .satisfiesRule('isArabicAlpha')
      .required()

      .ensure('lastName')
      .displayName('نام خانوادگی')
      .satisfiesRule('isArabicAlpha')
      .required()

      .ensure('idNumber')
      .displayName('شماره شناسنامه')
      .satisfiesRule('isNationalCode')
      // .required()


      .ensure('codeMeli')
      .displayName('کدملی ')
      .satisfiesRule('idNumberOrNationalCode')
      // .required()

      .ensure('fatherName')
      .displayName('نام پدر')
      .satisfiesRule('justAlphaCharachter')
      // .required()

      .ensure('postalCode')
      .displayName('کد پستی')
      .minLength(10)
      .required()

      .ensure('email')
      .displayName('ایمیل')
      .satisfiesRule('isEmail')
      .required()

      .on(this);
  }

  static fromObject(src) {
    return Object.assign(new SchemaHardReal(), src);
  }

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.idNumber = '';
    this.codeMeli = '';
    this.fatherName = '';
    this.postalCode = '';
    this.email = '';
  }

  firstName = '';
  lastName = '';
  idNumber = '';
  codeMeli = '';
  fatherName = '';
  postalCode = '';
  email = '';
  kind = 'real';
}

export class SchemaHardLegal {
  constructor() {
    ValidationRules
      .ensure('companyName')
      .displayName('نام شرکت')
      .required()

      // .ensure('registrationNumber')
      // .displayName('شماره ثبت')
      // .required()

      .ensure('postalCode')
      .displayName('کد پستی')
      // .satisfiesRule('checkAddress')
      .minLength(10)

      .ensure('address')
      .displayName('آدرس ')
      // .satisfiesRule('isArabicAlpha')
      .satisfiesRule('checkAddress')
      // .required()


      .ensure('email')
      .displayName('ایمیل')
      .satisfiesRule('isEmail')
      .required()

      .ensure('phone')
      .displayName('شماره‌تماس ')
      .satisfiesRule('isMobile')
      .required()

      .on(this);
  }

  static fromObject(src) {
    return Object.assign(new SchemaHardLegal(), src);
  }

  reset() {
    this.companyName = '';
    this.registrationNumber = '';
    this.postalCode = '';
    this.address = '';
    this.email = '';
    this.phone = '';
  }

  companyName = '';
  registrationNumber = '';
  postalCode = '';
  address = '';
  email = '';
  phone = '';
  kind = 'legal';
}

export class SchemaEasy {
  constructor() {
    ValidationRules
      .ensure('name')
      .displayName('نام')
      .satisfiesRule("isEnglishAlpha")
      .required()

      .ensure('alias')
      .displayName('نام‌مستعار ')
      .satisfiesRule("isBeginArabicAlphaAndCharacters")
      .required()

      .ensure('birthday')
      .displayName('تاریخ تولد')
      .satisfiesRule('isJalaliDate')
      .required()

      .ensure('idNumber')
      .displayName('شماره‌شناسنامه')
      .satisfiesRule('isNationalCode')
      .required()

      .ensure('gender')
      .displayName('جنسیت')
      .required()

      .ensure('maritalStatus')
      .displayName('وصعیت‌ تاهل')
      .required()

      .ensure('identityNumber')
      .displayName('کد‌ملی')
      .satisfiesRule('isNationalCode')
      .required()

      .ensure('email')
      .displayName('ایمیل')
      .satisfiesRule('isEmail')

      .required()

      .ensure('mobiles')
      .displayName('موبایل')
      .satisfiesRule('isMobile')
      .required()

      .ensure('phoneNumber')
      .displayName('شماره تلفن')
      .satisfiesRule('isPhone')
      .required()

      .ensure('isActive')
      .displayName('وضعیت کاربر')
      .required()

      .on(this);

    ValidationRules
      .ensure('company')
      .displayName('نام شرکت')
      .satisfiesRule('isArabicAlpha')
      .required()

      .ensure('post')
      .displayName('سمت شغلی')
      .satisfiesRule('isArabicAlpha')
      .required()

      .ensure('start')
      .displayName('تاریخ شروع‌کار')
      .satisfiesRule('isJalaliDate')
      .required()

      .ensure('averageSalary')
      .displayName('میانگین حقوق')
      .required()

      .ensure('phones')
      .displayName('شماره تلفن')
      .satisfiesRule('isPhone')
      .required()
      .on(this.job)

  }

  static fromObject(src) {
    return Object.assign(new SchemaEasy(), src);
  }

  reset() {
    this.name = '';
    this.alias = '';
    this.birthday = '';
    this.idNumber = '';
    this.identityNumber = null;
    this.email = '';
    this.mobiles = '';
    this.phoneNumber = '';
    this.isActive = true;
    this.job = {
      company: '',
      post: '',
      start: '',
      averageSalary: null,
      phones: '',
    }
  }

  name = '';
  alias = '';
  birthday = '';
  idNumber = '';
  gender = '';
  maritalStatus = '';
  identityNumber = null;
  email = '';
  mobiles = '';
  phoneNumber = '';
  isActive = true;
  job = {
    company: '',
    post: '',
    start: '',
    averageSalary: null,
    phones: '',
  };
}

