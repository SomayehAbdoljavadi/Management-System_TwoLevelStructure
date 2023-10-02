var uuid = require('uuid');
let PartAuthenticationInterface = require('partAuthenticationInterface');
var SamadService = require('./SamadService');
var PartConfig = require('../ConfigModules/PartConfigService');
PartConfig.PartConfig('authentication')

exports.AuthenticationService = (request, response) => {
    let AI = new PartAuthenticationInterface(PartConfig.ConfigGW.global);
    let ai = new AI(PartConfig.ConfigGW.instance);
    return new Promise(function (resolve, reject) {
        self.ai.authenticate({
                username: request.data.data.username,
                password: request.data.data.password
            }, 'system1', {
                'request-id': uuid(),
                userIp: '127.0.0.1'
            })
            .then(function (result) {
                let notMatch = false;
                ['entryId', 'userId', 'status', 'uniqueFields']
                .forEach(function (item) {
                    if (!result.data.hasOwnProperty(item)) {
                        notMatch = true;
                    }
                });
                if (notMatch) {
                    esponse.sendFail(error);
                } else {
                    SamadService.SamadService(request, response).then(function (res) {
                            resolve([request.data.data.username, res])
                        })
                        .catch(function (error) {
                            console.log(`Error in executing ${error}`)
                        })
                }
            }).catch(function (error) {
                reject(error)
            });
    })





}