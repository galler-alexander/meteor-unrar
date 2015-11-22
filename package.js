Package.describe({
  name: 'ag2s:unrar',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Unrars rar archives',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/galler-alexander/meteor-unrar',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'unrar': '0.1.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('unrar.js', 'server');
  api.export('Unrar', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ag2s:unrar');
  api.addFiles('unrar-tests.js', 'server');
});
