var axios = require('axios');
var data

exports.GetEmployeeId = (response, ParentId) => {
  return new Promise(function (resolve, reject) {
    var config = {
      method: 'get',
      url: `http://localhost:8070/dataService?ParentId=${ParentId}`,
      headers: {},
      data: data
    };
    axios(config)
      .then(function (result) {
        resolve(result);
       }) .catch(function (error) {
        reject(error,  " Cant Finde  Employee OF Manager ", result.samadUsername)
      });
  })
}