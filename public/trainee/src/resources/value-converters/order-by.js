export class OrderByValueConverter {
  toView(val, columns = ['firstName', 'lastName'], order = 'asc') {
    if (val) {
      if (order === 'asc') {
        order = 1;
      } else if (order === 'desc') {
        order = -1;
      }
      return val.concat().sort((a, b) => {
        for (let i in columns) {
          let item = columns[i];
          if (a[item] !== b[item]) {
            if (typeof a[item] === 'number' && typeof b[item] === 'number') {
              return order * ((a[item] < b[item]) ? -1 : 1);
            }
            return order * (new Intl.Collator().compare(a[item], b[item]));
          }
        }
        return 0;
      });
    }
  }
}
