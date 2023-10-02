var axios = require('axios');
var data

exports.GetManagementInfo = (request, response) => {
  return new Promise(function (resolve, reject) {
    request.session.getSession((err, result) => {
      if (err) {
        response.sendFail(err)
      } else {
        var config = {
          method: 'get',
          url: `http://localhost:8070/dataService?id=${result.samadUsername}`,
          headers: {},
          data: data
        };
        axios(config)
          .then(function (res) {
            resolve(res)
          }).catch(function (error) {
            reject(error, " Cant Finde  Management IIIN  GetManagementInfo")
          });
      }
    })
  })

}