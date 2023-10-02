GetManagementInfo = require('./GetManagementInfo')
PostEmployeeInfo = require('./PostEmployeeInfo')
var axios = require('axios');
var data
exports.InsertEmployee = (request, response) => {
    Promise.all([GetManagementInfo.GetManagementInfo(request, response)])
        .then((res) => {
            request.data.parent = res[0].data.username
            Promise.all([PostEmployeeInfo.PostEmployeeInfo(request, response)])
                .then((result) => {
                    response.end("Management " + res[0].data.username + "   " + result[0].data)
                }).catch(function (error) {
                    response.end(error)
                })
        }).catch(function (error) {
            console.log(error, "  Promise.all GetManagementInfo InsertEmployee")
        })
}