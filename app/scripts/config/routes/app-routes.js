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
        controllerAs: 'vmMenu',
        templateUrl: 'views/menu.html',
        resolve: {
          auth: function($auth, $state){
            return $auth.validateUser()
              .then(function userAuthorized(user) {
                return user;
              }, function userNotAuthorized() {
                $state.go('login');
              });
            }
        }
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
