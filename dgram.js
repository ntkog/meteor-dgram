var dgram = Npm.require('dgram');
var defaultOpts = {
  listenPort : 10100,
  onListening : function() {
     var address = thatClient.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
  },
  onMessage : function(message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
  }
};

Dgram = function(opts) {
  var server =  dgram.createSocket('udp4');
  _.extend(opts, defaultOpts);
  server.bind(opts.listenPort);
  server.on('listening', opts.onListening);
  server.on('message',opts.onMessage);
  return server;
};

