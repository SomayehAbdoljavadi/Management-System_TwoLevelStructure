var EmployeeService = require('./EmployeeService');
var SamadService = require('./SamadService');
var AuthenticationService = require('./AuthenticationService');
var ProfileService = require('./ProfileService');

exports.RollBack = (SarviceName, request, response,self) => {
  console.log("**************RollBack*************");

  console.log("self**RollBack",self);

  switch (SarviceName) {
    case 'EmployeeService':
      break;
    case 'SamadService':
      EmployeeService.EmployeeServiceRollBack(request, response,self);
      break;
    case 'AuthenticationService':
      EmployeeService.EmployeeServiceRollBack(request, response,self)
      SamadService.SamadServiceRollBack(request, response,self)
      break;
    case 'ProfileService':
      EmployeeService.EmployeeServiceRollBack(request, response,self)
      SamadService.SamadServiceRollBack(request, response,self)
      AuthenticationService.AuthenticationServiceRollBack(request, response,self)
      break;
    default:
  }

}