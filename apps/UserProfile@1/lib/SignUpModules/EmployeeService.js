var axios = require('axios');
var data

var config = {
  method: 'delete',
  url: 'http://localhost:8070/dataService',
  headers: {
    'Content-Type': 'text/plain'
  },
  data: data
};

exports.EmployeeService = (request, res) => {
  return new Promise(function (resolve, reject) {
    axios.post('http://localhost:8070/dataService', request.data)

      .then(function (response) {
        resolve(response)
      }).catch(function (err) {
        reject(err)
      })
  });
}

exports.EmployeeServiceRollBack = (request, response) => {
  data = request.data;
  config.method = 'delete'
  config.data = data
  return new Promise(function (resolve, reject) {
     axios(config)
      .then(function (response) {
             response.write("DELETED User BY EmployeeServiceRollBack  IIIN SamadService", request.data.id);
        resolve(response)
      }).catch(function (error) {
        reject(error)
      })
  });
}