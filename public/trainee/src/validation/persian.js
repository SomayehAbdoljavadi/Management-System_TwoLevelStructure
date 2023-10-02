import {validationMessages} from 'aurelia-validation';

validationMessages['required'] = `\${$displayName} ضروری می باشد!`;
validationMessages['minLength'] = `\${$displayName} حداقل باید \${$config.length} حرف باشد!`;
validationMessages['maxLength'] = `\${$displayName} حداکثر باید \${$config.length} حرف باشد!`;
validationMessages['email'] = `\${$displayName} فرمتش باید ایمیل باشد!`;
validationMessages['minItems'] = `\${$displayName} حداقل باید شامل \${$config.count} آیتم باشد!`;

