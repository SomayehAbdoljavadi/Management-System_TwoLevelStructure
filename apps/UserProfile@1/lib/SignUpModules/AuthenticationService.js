var uuid = require('uuid');
let PartAuthenticationInterface = require('partAuthenticationInterface');
var PartConfig = require('../ConfigModules/PartConfigService');
var RollBack = require('./RollBack');
PartConfig.PartConfig('authentication')
let AI = new PartAuthenticationInterface(PartConfig.ConfigGW.global);
let ai = new AI(PartConfig.ConfigGW.instance);

exports.AuthenticationService = (request, res) => {
  return new Promise(function (resolve, reject) {

    let fields = {
      username: request.data.data.username,
      password: request.data.data.password
    };
    let status = 'active';
    let system = 'system1';

    ai.addUser(fields, status, system, {
        'request-id': uuid(),
        userIp: '127.0.0.1'
      })
      .then(function (response) {
        resolve(response)
      }).catch(function (err) {
        reject(err.data.message)
      })
  });
}


exports.AuthenticationServiceRollBack = (request, response) => {
  return new Promise(function (resolve, reject) {
    var username = request.data.data.username;
    let status = 'active';
    let system = 'system1';
    ai.removeUser({
        username
      }, system, {
        'request-id': uuid(),
        userIp: '127.0.0.1'
      })
      .then(function (response) {
        resolve(response)
      }).catch(function (error) {
        reject(error)
      });
  });
}