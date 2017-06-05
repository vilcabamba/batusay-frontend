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
      'batusayApp.directives',
      'ngMessages',
      'vsGoogleAutocomplete',
      'angular-toasty',
      'ui.bootstrap.datetimepicker',
      'ngAnimate',
      'ngFileUpload',
      'angucomplete-alt',
      'angularModalService'
    ]);

  angular.module('batusayApp.controllers', []);
  angular.module('batusayApp.config', []);
  angular.module('batusayApp.services', []);
  angular.module('batusayApp.filters', []);
  angular.module('batusayApp.directives', []);

})();
