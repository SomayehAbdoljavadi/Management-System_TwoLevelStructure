let u = require('partUtilities');
let PartLogger = require('partLogger');
let Logger = new PartLogger({});
let log = new Logger({
  sourceTypeWidth: 8,
  sourceNameWidth: 20,
  winstonConfig: {
    handleExceptions: true,
    json: true,
    colorize: true,
    timestamp: function () {
      return (new Date()).toLocaleTimeString();
    },
    prettyPrint: true
  },
  storageConfig: {
    dls: {
      enabled: false,
      storageName: 'Logger@6-test'
    },
    mongo: {
      enabled: false,
      storageName: 'Logger@6-test'
    },
    fileSystem: {
      enabled: false,
      path: 'message.json'
    },
    http: {
      enabled: false,
      host: '127.0.0.1',
      port: '80',
      path: '/service/logServer/saveLog',
      method: 'POST'
    }
  },
  levelConfig: {
    event: {
      view: true,
      save: true,
      color: 'green',
      viewPath: false,
      priority: 2
    },
    warning: {
      view: true,
      save: true,
      color: 'yellowBg',
      viewPath: true,
      priority: 1
    },
    error: {
      view: true,
      save: false,
      color: 'redBg',
      viewPath: true,
      priority: 0
    },
    info: {
      view: true,
      save: true,
      color: 'blueBg',
      viewPath: true,
      priority: 3
    },
    saves: {
      view: true,
      save: true,
      color: 'cyanBg',
      viewPath: true,
      priority: 4
    },
    mosifa: {
      view: true,
      save: false,
      color: 'cyanBg',
      viewPath: true,
      priority: 5
    },
    part: {
      view: true,
      save: true,
      color: 'cyanBg',
      viewPath: true,
      priority: 6
    }
  }
});
let packageJson = u.getPackageJson(__dirname);
let errorInfo = u.errorInfoGen(packageJson.moduleType, packageJson.name, packageJson.version);

exports.moduleName = packageJson.name;
exports.moduleType = packageJson.moduleType;
exports.moduleVersion = packageJson.version;
exports.log = log;
exports.e = {
  dbError: new u.PartEventDescriptor(errorInfo('dbError'), {
    message:
      {
        en: 'Database Error',
        fa: 'خطای دیتابیس'
      }
  }),
  sessionError: new u.PartEventDescriptor(errorInfo('sessionError'), {
    message:
      {
        en: 'Session Error',
        fa: 'خطای سشن'
      }
  })
};
exports.testRunners = {
  services1: {
    testScript: 'myService/tests/main.js',
    testResultFolder: 'tests/group1/test-report'
  },
  services132323232: {
    testScript: 's3/tests/main.js',
    testResultFolder: 'tests/group1/test-report'
  },
  services2: {
    testScript: 'myService/tests/main1.js',
    testResultFolder: 'tests/group1/test-report'
  }
};
