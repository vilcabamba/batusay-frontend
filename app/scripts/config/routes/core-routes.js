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
        controllerAs: 'loginVm',
        resolve: {
          auth: function($auth){
            return $auth.validateUser()
              .then(function userAuthorized() {
                return $state.go('app.events.index');
              }, function userNotAuthorized() {
                return;
            });
          }
        }
      });

      $urlRouterProvider.otherwise('/app/events/');
  });

})();
