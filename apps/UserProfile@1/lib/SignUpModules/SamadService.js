var axios = require('axios');

exports.SamadService = (request, res) => {
    return new Promise(function (resolve, reject) {
        var dataAddUser = JSON.stringify({
            "org": "intern_28",
            "users": [{
                "username": request.data.data.username
            }]
        });

        var configAddUser = {
            method: 'put',
            url: 'http://samad.partdp.ir/service/samad@8/users',
            headers: {
                'user': 'intern_28',
                'pass': 'intern_28',
                'Content-Type': 'application/json'
            },
            data: dataAddUser
        };

        axios(configAddUser)
            .then(function (response) {
                dataAddrole = JSON.stringify({
                    "org": "intern_28",
                    "roleName": "visitor",
                    "users": [request.data.data.username]
                });

                configAddrole = {
                    method: 'put',
                    url: 'http://samad.partdp.ir/service/samad@8/users',
                    headers: {
                        'user': 'intern_28',
                        'pass': 'intern_28',

                    },
                    data: dataAddrole
                };

                axios(configAddrole)
                    .then(function (res) {
                        resolve(res);

                    })
                    .catch(function (error) {
                        reject(error)
                    });
            }).catch(function (err) {
                reject(err.data.message)
            })
    });
}


exports.SamadServiceRollBack = (request, response) => {
    var data = JSON.stringify({
        "org": "intern_28",
        "filters": [{
            "username": request.data.data.username
        }]
    });

    var config = {
        method: 'delete',
        url: 'http://samad.partdp.ir/service/samad@8/users',
        headers: {
            'user': 'intern_28',
            'pass': 'intern_28',
            'Content-Type': 'application/json'
        },
        data: data
    };

    return new Promise(function (resolve, reject) {
        axios(config)
            .then(function (response) {
                resolve(response)
            })            .catch(function (error) {
                reject(error)
            });
    })
}