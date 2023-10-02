var InsertEmployee = require('./EmployeesInfoModules/InsertEmployee');
var GetAllEmployees = require('./EmployeesInfoModules/GetAllEmployees');

exports.httpHandlers = {
	UserInfo: {

		GET: {
			function: GetAllEmployees.GetAllEmployee
		},
		PUT: {
			function: InsertEmployee.InsertEmployee

		}
	}

}