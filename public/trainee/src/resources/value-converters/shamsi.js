const moment = require('moment-jalaali');
moment.loadPersian({dialect: 'persian-modern'});

export class ShamsiValueConverter {

  toView(val) {
    return moment(val).format('LLLL');
  }
}
