(function() {
  'use strict';

  var ngconstantConfig = {
    options: {
      space: '  ',
      wrap: '(function() {\n\n \'use strict\';\n\n {%= __ngModule %} \n\n })();',
      name: 'batusayApp.config',
      deps: false,
      dest: '<%= yeoman.app %>/scripts/config/constants.js'
    },
    development: {
      constants: {
        APP: {
          name: 'development',
          apiHost: 'http://localhost:3786',
          appName: 'De ley!'
        }
      }
    },
    staging: {
      constants: {
        APP: {
          name: 'staging',
          apiHost: 'https://batusay.herokuapp.com',
          appName: 'De ley!'
        }
      }
    }
  };

  return module.exports = ngconstantConfig;
})();
