import loki from 'lokijs';

export default class LokiService {

  constructor(DBName) {
    let idbAdapter = new (loki.prototype.getIndexedAdapter())(`${DBName}_idbAdapter`);
    this.db = new loki(DBName, {
      // env: 'BROWSER',
      adapter: idbAdapter
    });
    this.db.loadDatabase({}, error => {
      if (error) {
        console.log('error> ', error);
        return alert('error loading database');
      }
      console.log('database loaded successfully.');
    });
  }

  query(coll, q, firstOnly = false) {
    return this.getCollection(coll).chain().find(q, firstOnly).data();
  }

  insert(coll, data, callback) {
    this.getCollection(coll).insert(data);
    this.db.saveDatabase(error => {
      if (error) {
        console.log('error> ', error);
        return alert('error saving database');
      }
      callback && callback();
    });
  }

  update(coll, data, callback) {
    this.getCollection(coll).update(data);
    this.db.saveDatabase(error => {
      if (error) {
        console.log('error> ', error);
        return alert('error saving database');
      }
      callback && callback();
    });
  }

  remove(coll, q, callback) {
    this.getCollection(coll).findAndRemove(q);
    this.db.saveDatabase(error => {
      if (error) {
        console.log('error> ', error);
        return alert('error saving database');
      }
      callback && callback();
    });
  }

  getCollection(name) {
    let coll = this.db.getCollection(name);
    if (coll === null) {
      coll = this.db.addCollection(name, {indices: ['id']});
    }
    return coll;
  }

  static wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }
}
