/**
 * Created by alireza.gh on 2/27/2018.
 */
import {ValidationRules} from 'aurelia-validation';

ValidationRules.customRule(
  'isNationalOrCompany',
  (str, obj) => {
    try {
      let code = str;
      if (code.length === 10) {
        if (code == '0000000000' ||
          code == '1111111111' ||
          code == '2222222222' ||
          code == '3333333333' ||
          code == '4444444444' ||
          code == '5555555555' ||
          code == '6666666666' ||
          code == '7777777777' ||
          code == '8888888888' ||
          code == '9999999999') {
          return false;
        }
        let c = parseInt(code.charAt(9));
        let n = parseInt(code.charAt(0)) * 10 +
          parseInt(code.charAt(1)) * 9 +
          parseInt(code.charAt(2)) * 8 +
          parseInt(code.charAt(3)) * 7 +
          parseInt(code.charAt(4)) * 6 +
          parseInt(code.charAt(5)) * 5 +
          parseInt(code.charAt(6)) * 4 +
          parseInt(code.charAt(7)) * 3 +
          parseInt(code.charAt(8)) * 2;
        let r = n - parseInt(n / 11) * 11;
        if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
          return true;
        }

        return false;
      } else if (code.length === 11) {
        return code.match(/^(1)[0-9]{10}$/);
      }

      return false;
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isArabicAlpha',
  (str, obj) => {
    try {
      return str.match(/^[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F9\u06F7\u06F8\u0678\u0626\u06B0\u06CE\u06CF\u0661\u0669\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u064A\u0643\u0621\u063F\u0622\u0623\u0627\u063E\u0624\u0625\u0628\u0629\u063D\u067e\u062a\u062b\u062c\u0686\u062d\u062e\u062f\u0630\u0631\u0632\u0698\u0633-\u063a\u0641\u0642\u06a9\u06af\u0644-\u0646\u0648\u0624\u0647\u06cc\u0626\u0625\u0671\u0643\u0629\u064a\u0649\u200c _@]*$/); // Persian and some common Arabic Alphabets, Space, Underscore, @, Ctrl+Shift+2
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'number11start1',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^(1)[0-9]{10}$/i);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isEmail',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isWebsite',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);
ValidationRules.customRule(
  'isPhone',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^0?(([1-9]{2}\-?[1-9][0-9]{7})|([1-9][0-9]{2}\-?[1-9][0-9]{6})|([1-9][0-9]{7}))$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isPostalCode',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^[0-9]{10}$/i);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isArabicAlphaAndCharacters',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^[\d\u002E\u060C\u061B\u0620\u0621\u0622\u0623\u0624\u0625\u0626\u0627\u0628\u0629\u062A\u062B\u062C\u062D\u062E\u062F\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063A\u063F\u0640\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u0649\u064A\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u067A\u067B\u067E\u067F\u0680\u0681\u0682\u0683\u0684\u0686\u0687\u0698\u06A9\u06AF\u06BE\u06C1\u06CC\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9\u005F\u002D\u0028\u0029\u002F\u005C\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u0000 _@]*$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isBeginArabicAlphaAndCharacters',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^[\d\u002E\u060C\u061B\u0620\u0621\u0622\u0623\u0624\u0625\u0626\u0627\u0628\u0629\u062A\u062B\u062C\u062D\u062E\u062F\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063A\u063F\u0640\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u0649\u064A\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u067A\u067B\u067E\u067F\u0680\u0681\u0682\u0683\u0684\u0686\u0687\u0698\u06A9\u06AF\u06BE\u06C1\u06CC\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9\u005F\u002D\u0028\u0029\u002F\u005C\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u0000 _@][\d\u002E\u060C\u061B\u0620\u0621\u0622\u0623\u0624\u0625\u0626\u0627\u0628\u0629\u062A\u062B\u062C\u062D\u062E\u062F\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063A\u063F\u0640\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u0649\u064A\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u067A\u067B\u067E\u067F\u0680\u0681\u0682\u0683\u0684\u0686\u0687\u0698\u06A9\u06AF\u06BE\u06C1\u06CC\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9\u005F\u002D\u0028\u0029\u002F\u005C\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u0000 _@a-zA-Z0-9]*$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isArabicAlpha',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F9\u06F7\u06F8\u0678\u0626\u06B0\u06CE\u06CF\u0661\u0669\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u064A\u0643\u0621\u063F\u0622\u0623\u0627\u063E\u0624\u0625\u0628\u0629\u063D\u067e\u062a\u062b\u062c\u0686\u062d\u062e\u062f\u0630\u0631\u0632\u0698\u0633-\u063a\u0641\u0642\u06a9\u06af\u0644-\u0646\u0648\u0624\u0647\u06cc\u0626\u0625\u0671\u0643\u0629\u064a\u0649\u200c _@]*$/); // Persian and some common Arabic Alphabets, Space, Underscore, @, Ctrl+Shift+2
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isNumeric',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^-?[0-9]+$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isJalaliDate',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^(13|14)\d\d\/((0?[1-6]\/(0?[1-9]|[12][0-9]|3[01]))|((0?[7-9]|1[012])\/(0?[1-9]|[12][0-9]|30)))$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isUsername',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^[a-z][a-z0-9_\.]{3,24}$/i);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isPassword',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/[\S]{6,24}$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isStrongPassword',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()=+_ {}|?><]{8,}$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'matchesProperty',
  (value, obj, otherPropertyName) => {
    console.log(value, obj[otherPropertyName])
    return (value === null
      || value === undefined
      || value === ''
      || obj[otherPropertyName] === null
      || obj[otherPropertyName] === undefined
      || obj[otherPropertyName] === ''
      || value === obj[otherPropertyName])
  },
  '${$displayName} با ${$getDisplayName($config.title)} یکسان نمی باشد.',
  (otherPropertyName, title) => ({otherPropertyName, title})
);

ValidationRules.customRule(
  'doesntMatchesProperty',
  (value, obj, otherPropertyName) => {
    console.log(parseInt(value), obj[otherPropertyName])
    return (value === null
      || value === undefined
      || value === ''
      || obj[otherPropertyName] === null
      || obj[otherPropertyName] === undefined
      || obj[otherPropertyName] === ''
      || parseInt(value) !== parseInt(obj[otherPropertyName]))
  },
  '${$displayName} با ${$getDisplayName($config.title)} نباید یکسان  باشد.',
  (otherPropertyName, title) => ({otherPropertyName, title})
);

ValidationRules.customRule(
  'isLimitedNumeric',
  (str, obj, min, max) => {
    var reg = new RegExp("^\\d{" + min + "," + max + "}?$", "g");
    try {
      if (!str) {
        return true;
      }
      return str.match(reg);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'repayValidator',
  (value, obj, otherPropertyName) => {
    return (value === null
      || value === undefined
      || value === ''
      || obj[otherPropertyName] === null
      || obj[otherPropertyName] === undefined
      || obj[otherPropertyName] === ''
      || value < obj[otherPropertyName])
  },
  '${$displayName} نمی‌تواند بزرگتر یا مساوی درآمد ماهیانه باشد.'
);

ValidationRules.customRule(
  'isMobile',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^(\+989|09|9)[0-9]{9}$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isPersianAlpha',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^[\u0621\u0622\u0627\u0623\u0628\u067e\u062a\u062b\u062c\u0686\u062d\u062e\u062f\u0630\u0631\u0632\u0698\u0633-\u063a\u0641\u0642\u06a9\u06af\u0644-\u0646\u0648\u0624\u0647\u06cc\u0626\u0625\u0671\u0643\u0629\u064a\u0649\u200c _@]*$/); // Persian and some common Arabic Alphabets, Space, Underscore, @, Ctrl+Shift+2
    } catch (e) {
      return false;
    }
  },
  '${$displayName} حروف فارسی مجاز است.'
);

ValidationRules.customRule(
  'isEnglishAlpha',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^[a-zA-Z0-9?><;,{}[\]\-_+=!@#$%\^&*|']*$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isPersianAlphaNumeric',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^[\d\u06f0-\u06f9\u0660-\u0669 \u0621\u0622\u0627\u0623\u0628\u067e\u062a\u062b\u062c\u0686\u062d\u062e\u062f\u0630\u0631\u0632\u0698\u0633-\u063a\u0641\u0642\u06a9\u06af\u0644-\u0646\u0648\u0624\u0647\u06cc\u0626\u0625\u0671\u0643\u0629\u064a\u0649\u200c _@]*$/); // Persian and some common Arabic Alphabets, Space, Underscore, @, Ctrl+Shift+2
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isAlphaNumeric',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^[a-zA-Z0-9_@]+$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isEmpty',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return (str === '' || str === '? undefined:undefined ?') ? null : str;
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'percent2',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      str = parseFloat(str);
      return !(str <= 1 && str > -1) ? null : str;
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isAccountNumber',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/(\d{3})+-(\d{7})+-(\d)/g);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isMidAccountNumber',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^\d{6}(\d{1})?$/g);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'floatNumber',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^[-+]?[0-9]*\.?[0-9]+$/g);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isValidFormat',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      let format = str.split('.')[str.split('.').length - 1];
      let formats = ['xlsx', 'pdf', 'doc', 'docx', 'xlsm', 'jpg', 'jpeg', 'png', 'pptx', 'ppsx', 'ppt', 'txt'];
      if (formats.indexOf(format) === -1) {
        return null;
      }
      return true;
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isCompanyCode',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      return str.match(/^(1)[0-9]{10}$/);
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isNationalCode',
  (str, obj) => {
    try {
      if (!str) {
        return true;
      }
      let meliCode = str;
      if (meliCode.length === 10) {
        if (meliCode === '0000000000' ||
          meliCode === '1111111111' ||
          meliCode === '2222222222' ||
          meliCode === '3333333333' ||
          meliCode === '4444444444' ||
          meliCode === '5555555555' ||
          meliCode === '6666666666' ||
          meliCode === '7777777777' ||
          meliCode === '8888888888' ||
          meliCode === '9999999999') {
          return false;
        }
        let c = parseInt(meliCode.charAt(9));
        let n = parseInt(meliCode.charAt(0)) * 10 +
          parseInt(meliCode.charAt(1)) * 9 +
          parseInt(meliCode.charAt(2)) * 8 +
          parseInt(meliCode.charAt(3)) * 7 +
          parseInt(meliCode.charAt(4)) * 6 +
          parseInt(meliCode.charAt(5)) * 5 +
          parseInt(meliCode.charAt(6)) * 4 +
          parseInt(meliCode.charAt(7)) * 3 +
          parseInt(meliCode.charAt(8)) * 2;
        let r = n - parseInt(n / 11) * 11;
        if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
          return true;
        }

        return false;
      }

      return false;
    } catch (e) {
      return false;
    }
  },
  '${$displayName} معتبر نمی باشد.'
);

ValidationRules.customRule(
  'isAccept',
  (str, obj, extensions) => {
    try {
      if (!str || !extensions) return true;

      extensions = extensions.toLowerCase();
      extensions = extensions.split(',');
      let fileExtension = str.substr(str.lastIndexOf('.'));
      fileExtension = fileExtension.toLowerCase();
      for (let i = 0; i < extensions.length; i++) {
        extensions[i] = extensions[i].trim();
      }
      return (extensions.indexOf(fileExtension) > -1);
    } catch (e) {
      return false;
    }
  },
  'فرمت فایل ورودی، نامعتبر است.(فرمت مجاز : \${$config.extensions})',
  (extensions) => ({extensions})
);

ValidationRules.customRule(
  'isMaxSize',
  (str, obj, params) => {
    try {
      let maxSize;
      let sizeUnit;
      if (!str || !params) return true;

      let sizeInfo = params.split(' ');
      for (let i = 0; i < sizeInfo.length; i++) {
        sizeInfo[i] = sizeInfo[i].trim();
      }
      maxSize = +sizeInfo[0];
      sizeUnit = sizeInfo[1].toLowerCase();
      switch (sizeUnit) {
        case 'kb':
          str = +str / 1024;
          break;
        case 'mb':
          str = +str / (1024 * 1024);
          break;
        default:
          str = 0;
      }
      return +str <= +maxSize;
    } catch (e) {
      return false;
    }
  },
  'سایز فایل ورودی، بزرگتر از حد مجاز (\${$config.params}) است.',
  (params) => ({params})
);

ValidationRules.customRule(
  'idNumberOrNationalCode',
  (str, obj, params) => {
    try {
      let NC = str;
      const IN = obj.idNumber

      if (str.length > 0 && str.length !== 10) {
        return false
      }

      let meliCode = str;
      if (meliCode.length === 10) {
        if (meliCode === '0000000000' ||
          meliCode === '1111111111' ||
          meliCode === '2222222222' ||
          meliCode === '3333333333' ||
          meliCode === '4444444444' ||
          meliCode === '5555555555' ||
          meliCode === '6666666666' ||
          meliCode === '7777777777' ||
          meliCode === '8888888888' ||
          meliCode === '9999999999') {
          return false;
        }
        let c = parseInt(meliCode.charAt(9));
        let n = parseInt(meliCode.charAt(0)) * 10 +
          parseInt(meliCode.charAt(1)) * 9 +
          parseInt(meliCode.charAt(2)) * 8 +
          parseInt(meliCode.charAt(3)) * 7 +
          parseInt(meliCode.charAt(4)) * 6 +
          parseInt(meliCode.charAt(5)) * 5 +
          parseInt(meliCode.charAt(6)) * 4 +
          parseInt(meliCode.charAt(7)) * 3 +
          parseInt(meliCode.charAt(8)) * 2;
        let r = n - parseInt(n / 11) * 11;
        if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
          NC = true;
        }
      }
      if ((NC && !IN) || (!NC && IN)) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false;
    }
  },
  'کد ملی یا شماره شناسنامه فقط یکی اجباری است',
  (params) => ({params})
);

ValidationRules.customRule(
  'justAlphaCharachter',
  (str, obj, params) => {
    try {
      const r = /^[a-zA-Z\u0600-\u06FF\s]+$/;
      if (r.test(str)) {
        return true
      }
      return false
    } catch (e) {
      return false;
    }
  },
  'حروف فارسی و انگلیسی بدون عدد مجاز است',
  (params) => ({params})
);

ValidationRules.customRule(
  'checkAddress',
  (str, obj, params) => {
    try {
      if (obj.postalCode != '' && str == '' || obj.postalCode == '' && str != '') {
        return false;
      } else {
        return str.match(/^[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F9\u06F7\u06F8\u0678\u0626\u06B0\u06CE\u06CF\u0661\u0669\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u064A\u0643\u0621\u063F\u0622\u0623\u0627\u063E\u0624\u0625\u0628\u0629\u063D\u067e\u062a\u062b\u062c\u0686\u062d\u062e\u062f\u0630\u0631\u0632\u0698\u0633-\u063a\u0641\u0642\u06a9\u06af\u0644-\u0646\u0648\u0624\u0647\u06cc\u0626\u0625\u0671\u0643\u0629\u064a\u0649\u200c _@]*$/); // Persian and some common Arabic Alphabets, Space, Underscore, @, Ctrl+Shift+2
      }
    } catch (e) {
      return false;
    }
  },
  'در صورت وارد کردن کد پستی ادرس را وارد کنید',
  (params) => ({params})
);

