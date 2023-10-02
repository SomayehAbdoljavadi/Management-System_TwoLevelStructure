var axios = require('axios');
var data
var GetEmployeesInfo=require('./GetEmployeesInfo')

exports.PostEmployeeInfo = (request, response) => {
  

    return new Promise(function (resolve, reject) {

        console.log("request.data.data.username",request.data.data.username)

        GetEmployeesInfo.GetEmployeesInfo(request,request.data.data.username)
        .then((res) => {
          response.write("User Name** " + request.data.data.username + " **Already Exists  ");
          console.log(res);
          response.end();
    
    
        }).catch(function (error) {


        var config = {
            method: 'post',
            url: 'http://localhost:8070/dataService',
            headers: {
                'Content-Type': 'application/json'
            },
            data: request.data
        }
        axios(config)
            .then(function (res) {
                resolve(res)
            }).catch(function (error) {
                reject(error.response.data)
            });
    })

})
}