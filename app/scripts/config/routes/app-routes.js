(function() {
  'use strict';

  angular
    .module('batusayApp.config')
    .config(function ($stateProvider) {

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        controller: 'MenuController',
        controllerAs: 'menuVm',
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
  });

})();
