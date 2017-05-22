(function() {
  'use strict';

  angular
    .module('batusayApp', [
      'ui.router',
      'ng-token-auth',
      'batusayApp.config',
      'batusayApp.controllers',
      'batusayApp.services',
      'batusayApp.filters',
      'ngMessages',
      'vsGoogleAutocomplete',
      'angular-toasty',
      'ui.bootstrap.datetimepicker'
    ]);

  angular.module('batusayApp.controllers', []);
  angular.module('batusayApp.config', []);
  angular.module('batusayApp.services', []);
  angular.module('batusayApp.filters', []);

})();
