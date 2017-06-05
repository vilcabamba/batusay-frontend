// Karma configuration
// Generated on 2017-04-25

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-cookie/angular-cookie.js',
      'bower_components/ng-token-auth/dist/ng-token-auth.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/vsGoogleAutocomplete/dist/vs-google-autocomplete.js',
      'bower_components/vsGoogleAutocomplete/dist/vs-autocomplete-validator.js',
      'bower_components/angular-toasty/dist/angular-toasty.js',
      'bower_components/moment/min/moment.min.js',
      'bower_components/moment/locale/es.js',
      'bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker.js',
      'bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker.templates.js',
      'bower_components/lodash/lodash.js',
      'bower_components/ng-file-upload/ng-file-upload.js',
      'bower_components/angucomplete-alt/angucomplete-alt.js',
      'bower_components/angular-modal-service/dst/angular-modal-service.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
