var EmployeeService = require('./EmployeeService');
var SamadService = require('./SamadService');
var AuthenticationService = require('./AuthenticationService');
var ProfileService = require('./ProfileService');
var RollBack = require('./RollBack');
var GetUserInfo = require('../UserInfoModules/GetUserInfo')

var ServiceName

exports.signup = (request, response) => {

  GetUserInfo.GetUserInfo(request, response)
    .then((res) => {
      response.write("User Name** " + request.data.data.username + " **Already Exists  ");
      response.end();
    }).catch(function (error) {
      const promises = [EmployeeService.EmployeeService(request, response),
        SamadService.SamadService(request, response),
        AuthenticationService.AuthenticationService(request, response),
        ProfileService.ProfileService(request, response)
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
              RollBack.RollBack('EmployeeService', request, response);
              response.write(JSON.stringify)(results[0].reason)
              response.end()
              break;
            case 1:
              RollBack.RollBack('SamadService', request, response);
              response.write(JSON.stringify(results[1].reason))
              response.end()
              break;
            case 2:
              RollBack.RollBack('AuthenticationService', request, response);
              response.write(JSON.stringify(results[2].reason))
              response.end()
              break;
            case 3:
              RollBack.RollBack('ProfileService', request, response);
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