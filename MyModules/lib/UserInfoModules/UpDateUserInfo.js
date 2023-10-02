var axios = require('axios');
var GetUserInfo = require('./GetUserInfo')

exports.UpDateUserInfo = (request, response) => {
  GetUserInfo.GetUserInfo(request, response)
    .then((res) => {
      var password = res.data.password;
      var userInfoGet = res.data
      var config = {
        method: 'put',
        url: 'http://localhost:8070/dataService',
        headers: {
          'Content-Type': 'application/json'
        },
        data: request.data
      };
      if (request.data.data.password != password) {
        response.end(" does not access to change your passwords ");
      } else {
        return new Promise(function (resolve, reject) {
          axios(config)
            .then(function (res) {
              response.write("******   UpDate UserInfo From     ******" +
                '\n' + "Id: " + request.data.id + ",Data :" + JSON.stringify(userInfoGet) +
                '\n' + "******    UpDate UserInfo To     ******" +
                '\n' + JSON.stringify(res.data));
              response.end();
              resolve(res)
            })
            .catch(function (error) {
              reject(error, " Cant Finde  User BY EmployeeService IIIN UpDateUserInfo ")
            });
        })
      }
    })  
}