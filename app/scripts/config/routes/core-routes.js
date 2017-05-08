(function() {
  'use strict';

  angular
    .module('batusayApp.config')
    .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login',{
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'loginVm'
      });

      $urlRouterProvider.otherwise('/app/dashboard');
  });

})();
