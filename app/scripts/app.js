(function() {
  'use strict';

  angular
    .module('batusayApp', [
      'ui.router',
      'batusayApp.controllers'
    ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      // .state('main', {
      //   url: '/',
      //   templateUrl: 'views/main.html',
      //   controller: 'MainController',
      //   controllerAs: 'vmMain'
      // })
      .state('login',{
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'loginVm'
      })
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'views/menu.html'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          'menu@app': {
            controllerAs: 'vmMain',
            controller: 'MainController',
            templateUrl: 'views/main.html',
          }
        }
      });
      $urlRouterProvider.otherwise('/app/dashboard');
  });

  angular.module('batusayApp.controllers', []);

})();
