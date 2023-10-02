GetManagementInfo = require('./GetManagementInfo')
GetEmployeeId = require('./GetEmployeeId')
GetEmployeesInfo = require('./GetEmployeesInfo')

exports.GetAllEmployee = (request, response) => {
  Promise.all([GetManagementInfo.GetManagementInfo(request, response)])
    .then((res) => {
      Promise.all([GetEmployeeId.GetEmployeeId(res, res[0].data.username)])
        .then((result) => {
          var EmployeesId = result[0].data
          var EmployeesInfo = []
          let promises = []
          EmployeesId.forEach(element => {
            promises.push(GetEmployeesInfo.GetEmployeesInfo(response, element))

          })
          let responsewrite = "EmployeesInfo OF Management" + res[0].data.username
          Promise.allSettled(promises)
            .then((results) => {
              results.forEach((result) => {
                EmployeesInfo.push(JSON.stringify(result.value.data))
                responsewrite = responsewrite + '\n' + '***---***' + '\n' + JSON.stringify(result.value.data)
              })
              response.write(responsewrite)
              response.end()
            })
        }).catch(function (error) {
          console.log(error, " Promise.all   GetEmployeeId GetAllEmployees")
        })
    }).catch(function (error) {
      console.log(error, "  Promise.all GetManagementInfo GetAllEmployees")
    })
}