

let PartAuthenticationInterface = require('partAuthenticationInterface');
let partProfileInterface = require('partProfileInterface');

var signup = require('./SignUpModules/signup');
var LogIn = require('./LogInModules/LogIn');
var LogOut = require('./LogOutModules/LogOut');
var GetUserInfo = require('./UserInfoModules/GetUserInfo');
var UpDateUserInfo = require('./UserInfoModules/UpDateUserInfo');
var Schema = require('./SignUpModules/Schema');

//let httpHandlers = require('./httpHandlers');
   


class partMyModules {

    
    constructor(globalOptions) {
        const test = "test"
       console.log("partMyModules");
        let AuthenticationInterface = new PartAuthenticationInterface(globalOptions.AuthenticationConfigGW.global);
        let ProfileInterface = new partProfileInterface(globalOptions.partProfileConfig_GW.global)
        return class partMyModule {
            constructor(instanceOptions) {
                //this._samad = new samadInterface(globalOptions.partSamadInterfaceConfig.global);
                this.ai = new AuthenticationInterface(globalOptions.AuthenticationConfigGW.instance)
                this.profileIns = new ProfileInterface(globalOptions.partProfileConfig_GW.instance)

               // Object.assign(this, httpHandlers)
                Object.assign(this, instanceOptions)
                Object.assign(this, signup)
                Object.assign(this, LogIn)
                Object.assign(this, LogOut)
                Object.assign(this, GetUserInfo)
                Object.assign(this, UpDateUserInfo)

            }
            getHttpHandlers() {
                let self = this;                
                return {
                    SignUp: {
//                         POST:{
// 		 "function":function (res,req) {
// console.log("params",params);             
//          }}
                        POST: {
                            
                            function: self.signup.bind(self),
                           
                            dataSchema: function (headers, data, session, callback) {
                                callback(null, Schema.SignUp);
                            }
                        }
                    },
                    LogIn: {
                        PUT: {
                            function: self.LogIn.bind(self),
                            dataSchema: function (headers, data, session, callback) {
                                callback(null, Schema.LogIn);
                            }
                        }
                    },
                    LogOut: {
                        PUT: {
                            function: self.LogOut.bind(self)
                        }
                    },
                    UserInfo: {
                        GET: {
                            function: self.GetUserInfo.bind(self)
                        },
                        PUT: {
                            function: self.UpDateUserInfo.bind(self)
                        }
                    }

                }


            }
        }
    }
}
module.exports = partMyModules;