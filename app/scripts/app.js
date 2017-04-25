(function() {
  'use strict';

  angular
    .module('batusayApp', [
      'ui.router'
    ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'vmMain'
      });
      $urlRouterProvider.otherwise('/');
  });

})();
