var EmployeeService = require('./EmployeeService');
var SamadService = require('./SamadService');
var AuthenticationService = require('./AuthenticationService');
var ProfileService = require('./ProfileService');
var RollBack = require('./RollBack');
var GetUserInfo = require('../UserInfoModules/GetUserInfo')

var ServiceName

exports.signup = function(request, response)  {
  console.log("**************signup*************");
  var self = this
  console.log("self**signup",self);
  GetUserInfo.GetUserInfo(request, response,self)
    .then((res) => {
      response.write("User Name** " + request.data.data.username + " **Already Exists  ");
      response.end();
    }).catch(function (error) {
      const promises = [EmployeeService.EmployeeService(request, response,self),
        SamadService.SamadService(request, response,self),
        AuthenticationService.AuthenticationService(request, response,self),
        ProfileService.ProfileService(request, response,self)
      ]
      Promise.allSettled(promises)
        .then((results) => {
          results.forEach((result, i) => {
            if (result.status == "fulfilled") {

            } else if (result.status == "rejected") {
              ServiceName = i
            }
          })
          switch (ServiceName) {
            case 0:
              RollBack.RollBack('EmployeeService', request, response,self);
              response.write(JSON.stringify)(results[0].reason)
              response.end()
              break;
            case 1:
              RollBack.RollBack('SamadService', request, response,self);
              response.write(JSON.stringify(results[1].reason))
              response.end()
              break;
            case 2:
              RollBack.RollBack('AuthenticationService', request, response,self);
              response.write(JSON.stringify(results[2].reason))
              response.end()
              break;
            case 3:
              RollBack.RollBack('ProfileService', request, response,self);
              response.write(JSON.stringify(results[3].reason))
              response.end()
              break;
            default:
              response.write("******* SignUp Done ********");
              response.end()
          }
        })
    })
}
