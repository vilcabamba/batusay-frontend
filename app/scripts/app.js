(function() {
  'use strict';

  angular
    .module('batusayApp', [
      'ui.router',
      'ng-token-auth',
      'batusayApp.config',
      'batusayApp.controllers',
      'ngMessages'
    ]);

  angular.module('batusayApp.controllers', []);
  angular.module('batusayApp.config', []);

})();
