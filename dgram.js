var dgram = Npm.require('dgram');
var defaultOpts = {
  listenPort : 10100,
  onMessage : function(message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
  }
};

Dgram = function(opts) {
  var server =  dgram.createSocket('udp4');
  _.extend(opts, defaultOpts);
  server.bind(opts.listenPort);
  server.on('message',opts.onMessage);
  return server;
};

