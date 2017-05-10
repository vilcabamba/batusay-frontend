(function() {
  'use strict';

  angular
    .module('batusayApp', [
      'ui.router',
      'ng-token-auth',
      'batusayApp.config',
      'batusayApp.controllers',
      'batusayApp.services',
      'ngMessages',
      'vsGoogleAutocomplete'
    ]);

  angular.module('batusayApp.controllers', []);
  angular.module('batusayApp.config', []);
  angular.module('batusayApp.services', []);

})();
