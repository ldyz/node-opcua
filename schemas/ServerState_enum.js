// --------- This code has been automatically generated !!! Wed Jan 21 2015 19:11:39 GMT+0100 (Paris, Madrid)
var factories  = require("../lib/misc/factories");
var makeNodeId = require("../lib/datamodel/nodeid").makeNodeId;
var ServerState_Schema = {
  id:  makeNodeId(852,0),
  name: 'ServerState',
  enumValues: {
     Running: 0,
     Failed: 1,
     NoConfiguration: 2,
     Suspended: 3,
     Shutdown: 4,
     Test: 5,
     CommunicationFault: 6,
     Unknown: 7,
  }
};
exports.ServerState_Schema = ServerState_Schema;
exports.ServerState = factories.registerEnumeration(ServerState_Schema);