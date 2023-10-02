
    let config = require('../config.js');
    
    //-----------------------partLoggerConfig------------------------------
//let config = require('../../config.js');

let partLoggerConfig = {
  global: {

  },
  instance: {
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
  }
};



//----------------------------AuthenticationConfigGW--------------------------------
//let ConfigPartAuthenticationInterface = require('partAuthenticationInterface');


let tracerConfigAuthentication = {
  TraceTitle: 'partAuthenticationInterface@' + config.version,
  sampler: {
    type: 'probabilistic',
    param: 1
  }
};

let AuthenticationConfigGW = {
  global: {
    gatewayEnable: true,
    host: 'authentication.apipart.ir',
    protocol: 'https',
    port: 443,
    tracerConfig: tracerConfigAuthentication,
    partLoggerConfig: partLoggerConfig,
  },
  instance: {
    auth: {
      user: 'intern_28',
      pass: 'intern_28'
    }
  }
};



//---------------------------------------partProfileConfig_GW---------------------------------
//let ConfigpartProfileInterface = require('partProfileInterface');

let tracerConfigProfile = {
  TraceTitle: 'partProfileInterface@' + config.version,
  sampler: {
    type: 'probabilistic',
    param: 1
  },
  templates: {
    tagTemplate: {
      component: 'partProfileInterface@' + config.version
    },
    logTemplate: {
      component: 'partProfileInterface@' + config.version
    }
  }
};
let partProfileConfig_GW = {
  global: {
    gatewayEnable: true,
    host: 'profile.apipart.ir', // دامنه‌ی سرویس
    protocol: 'https',
    port: 443,
    partLoggerConfig: partLoggerConfig,
    tracerConfig: tracerConfigProfile
  },
  instance: {
    auth: {
      user: 'intern_28',
      pass: '123456' // اختیاری است و بستگی به این دارد که سرویس مقصد پسورد بخواهد یا نه
    }
  }
}


//-------------------------------------

module.exports.partMyModulesConfig = {
  global: {
    partProfileConfig_GW: partProfileConfig_GW,
   partLoggerConfig: partLoggerConfig,
    AuthenticationConfigGW: AuthenticationConfigGW
  },
  instance: {
    
  
  }
}

    