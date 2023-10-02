var uuid = require('uuid');
let partProfileInterface = require('partProfileInterface');
var PartConfig = require('../ConfigModules/PartConfigService');
PartConfig.PartConfig('profile')

let PI_GW = new partProfileInterface(PartConfig.ConfigGW.global);
let profileIns = new PI_GW(PartConfig.ConfigGW.instance);

exports.ProfileService = (request, res) => {
    return new Promise(function (resolve, reject) {

        var trackingHeaders = {
            'request-id': uuid(),
            userIp: '127.0.0.1'
        };

        var profileTestReal = {
            "uniqueKey": request.data.data.uniqueKey,
            "type": request.data.data.type,
            "firstName": request.data.data.firstName,
            "lastName": request.data.data.lastName,
            "gender": request.data.data.gender,
            "idNumber": request.data.data.idNumber,
            "education": request.data.data.education,
            "email": request.data.data.email
        };

        profileIns.addProfile(profileTestReal, trackingHeaders)
            .then(function (response) {
                resolve(response)
            }).catch(function (err) {
                reject(err.data.message)
            })
    });
}

exports.ProfileServiceRollBack = (request, response) => {
    var idNumber = request.data.data.idNumber;
    profileIns.removeRealProfiles(idNumber, true, trackingHeaders)
        .then(function () {
            done();
        }).fail(function (error) {
            done(error);
        });
}