var uuid = require('uuid');
let partProfileInterface = require('partProfileInterface');
var PartConfig = require('../ConfigModules/PartConfigService');
PartConfig.PartConfig('profile')
//let self=this
//console.log("self",self);

let PI_GW = new partProfileInterface(PartConfig.ConfigGW.global);
let profileIns = new PI_GW(PartConfig.ConfigGW.instance);

exports.ProfileService = (request, res,self) => {
    return new Promise(function (resolve, reject) {
        console.log("self**ProfileService",self);
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

        self.profileIns.addProfile(profileTestReal, trackingHeaders)
        // self.addProfile(profileTestReal, trackingHeaders)
            .then(function (response) {
                resolve(response)
                console.log("respond",response);
            }).catch(function (err) {
                reject(err.data.message)
            })
    });
}

exports.ProfileServiceRollBack = (request, response,self) => {
   
    var idNumber = request.data.data.idNumber;
    console.log("self**ProfileServiceRollBack",self);
    self.profileIns.removeRealProfiles(idNumber, true, trackingHeaders)
    // self.removeRealProfiles(idNumber, true, trackingHeaders)
        .then(function () {
            done();
        }).fail(function (error) {
            done(error);
        });
}