import {toastrOptions} from '../../public-environment';

export class Notification {
  constructor(enableToastr = true, enableConsole = true, _toastrOptions = null, TAG = '') {
    this.enableToastr = enableToastr;
    this.enableConsole = enableConsole;
    this.toastrOptions = _toastrOptions ? _toastrOptions : toastrOptions;
    this.TAG = TAG;
  }

  log(message = '', title = '', server = false) {
    if (this.enableConsole) {
      console.log((this.TAG !== '' ? '[' + this.TAG + ']' : ''), '' + title + ': ', message);
    }
    if (this.enableToastr) {
      if (!server) {
        toastr.success(message, title, this.toastrOptions);
      } else {
        // nothing to do
      }
    }
  }

  info(message = '', title = '', server = false) {
    if (this.enableConsole) {
      console.info((this.TAG !== '' ? '[' + this.TAG + ']' : ''), '' + title + ': ', message);
    }
    if (this.enableToastr) {
      if (!server) {
        toastr.info(message, title, this.toastrOptions);
      } else {
        // nothing to do
      }
    }
  }

  debug(message = '', title = '', server = false) {
    if (this.enableConsole) {
      console.debug((this.TAG !== '' ? '[' + this.TAG + ']' : ''), '' + title + ': ', message);
    }
    if (this.enableToastr) {
      let debugOptions = Object.assign({}, this.toastrOptions);
      debugOptions.debug = true;
      if (!server) {
        toastr.success(message, title, debugOptions);
      } else {
        // nothing to do
      }
    }
  }

  warn(message = '', title = '', server = false) {
    if (this.enableConsole) {
      console.warn((this.TAG !== '' ? '[' + this.TAG + ']' : ''), '' + title + ': ', message);
    }
    if (this.enableToastr) {
      if (!server) {
        toastr.warning(message, title, this.toastrOptions);
      } else {
        // nothing to do
      }
    }
  }

  error(message = '', title = '', server = false) {
    if (this.enableConsole) {
      console.error((this.TAG !== '' ? '[' + this.TAG + ']' : ''), '' + title + ': ', message);
    }
    if (this.enableToastr) {
      if (!server) {
        toastr.error(message, title, this.toastrOptions);
      } else {
        toastr.error('در سمت سرور مشکلی رخ داده است.', 'خطای سرور', this.toastrOptions);
      }
    }
  }

  notifiy(message = '', title = '', type = 'success') {
    toastr[type](message, title, this.toastrOptions);
  }

  console(message = '', title = '', type = 'log') {
    console[type]((this.TAG !== '' ? '[' + this.TAG + ']' : ''), '' + title + ': ', message);
  }
}
