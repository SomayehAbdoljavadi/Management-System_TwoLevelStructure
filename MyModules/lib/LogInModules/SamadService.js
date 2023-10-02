exports.SamadService = (request, response) => {
    var axios = require('axios')

    var data = JSON.stringify({
        "org": "intern_28",
        "filters": [{
            "username": request.data.data.username
        }]
    });

    var config = {
        method: 'post',
        url: 'http://samad.partdp.ir/service/samad@8/users',
        headers: {
            'user': 'intern_28',
            'pass': 'intern_28',
            'Content-Type': 'application/json'
        },
        data: data
    };
    return new Promise(function (resolve, reject) {
        axios(config).then(function (res) {

            samaddata = JSON.stringify(res.data);
            resolve(res.data.data[0].roles[0])
        }).catch(function (error) {
            reject(error)
        });
    });
}