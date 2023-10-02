
let Config=require("../config.js")

let PartConfigService=require('./PartConfigService')
let partMyModules = require('../../../MyModules/lib/main')



let PartMyModules=new partMyModules(PartConfigService.partMyModulesConfig.global)
let Modules=new PartMyModules(PartConfigService.partMyModulesConfig.instance)

exports.httpHandlers=Modules.getHttpHandlers();
 

