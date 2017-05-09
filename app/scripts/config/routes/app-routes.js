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
      })
      .state('app.events', {
        url: '/events',
        abstract: true
      })
      .state('app.events.index', {
        url: '/',
        views: {
          'menu@app': {
            controllerAs: 'vmEvents',
            controller: 'EventsController',
            templateUrl: 'views/events.html',
          }
        }
      })
      .state('app.events.new', {
        url: '/new',
        views: {
          'menu@app': {
            controllerAs: 'vmEvent',
            controller: 'NewEventController',
            templateUrl: 'views/new-event.html',
          }
        }
      });
  });

})();