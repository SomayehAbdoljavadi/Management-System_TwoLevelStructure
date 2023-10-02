var EmployeeService = require('./EmployeeService');
var SamadService = require('./SamadService');
var AuthenticationService = require('./AuthenticationService');
var ProfileService = require('./ProfileService');

exports.RollBack = (SarviceName, request, response) => {

  switch (SarviceName) {
    case 'EmployeeService':
      break;
    case 'SamadService':
      EmployeeService.EmployeeServiceRollBack(request, response);
      break;
    case 'AuthenticationService':
      EmployeeService.EmployeeServiceRollBack(request, response)
      SamadService.SamadServiceRollBack(request, response)
      break;
    case 'ProfileService':
      EmployeeService.EmployeeServiceRollBack(request, response)
      SamadService.SamadServiceRollBack(request, response)
      AuthenticationService.AuthenticationServiceRollBack(request, response)
      break;
    default:
  }

}