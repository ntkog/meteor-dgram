Package.describe({
  name: 'ntkog:dgram',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Dgram wrapper for Meteor (Server side). Sending & Receiving UDP packets',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ntkog/meteor-dgram.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles('dgram.js', 'server');
  api.export('Dgram', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dgram');
  api.addFiles('dgram-tests.js');
});
