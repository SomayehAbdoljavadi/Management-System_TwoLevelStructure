var signup = require('./SignUpModules/signup');
var LogIn = require('./LogInModules/LogIn');
var LogOut = require('./LogOutModules/LogOut');
var GetUserInfo = require('./UserInfoModules/GetUserInfo');
var UpDateUserInfo = require('./UserInfoModules/UpDateUserInfo');
var Schema = require('./SignUpModules/Schema');

exports.httpHandlers = {
	SignUp: {
		POST: {
			function: signup.signup,
			dataSchema: function (headers, data, session, callback) {
				callback(null, Schema.SingnUp);
			}
		}
	},
	LogIn: {
		PUT: {
			function: LogIn.LogIn,
			dataSchema: function (headers, data, session, callback) {
				callback(null, Schema.LogIn);
			}
		}
	},
	LogOut: {
		PUT: {
			function: LogOut.LogOut
		}
	},
	UserInfo: {
		GET: {
			function: GetUserInfo.GetUserInfo
		},
		PUT: {
			function: UpDateUserInfo.UpDateUserInfo
		}
	}
}
