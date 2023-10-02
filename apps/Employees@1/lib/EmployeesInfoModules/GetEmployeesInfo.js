var axios = require('axios');
var data

exports.GetEmployeesInfo = (response, EmployeesId) => {
  return new Promise(function (resolve, reject) {
    var config = {
      method: 'get',
      url: `http://localhost:8070/dataService?id=${EmployeesId}`,
      headers: {},
      data: data
    };
    axios(config)
      .then(function (res) {
        resolve(res)

      }).catch(function (error) {
        reject(" Cant Finde  EmployeesInfo IIIN  GetEmployeesInfo")
      });
  })
}