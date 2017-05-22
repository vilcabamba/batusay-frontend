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
          currentUser: function($auth, $state){
            return $auth.validateUser()
              .then(function userAuthorized(user) {
                return user;
              }, function userNotAuthorized() {
                $state.go('login');
              });
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
            templateUrl: 'views/events/index.html',
          }
        }
      })
      .state('app.events.new', {
        url: '/new',
        views: {
          'menu@app': {
            controllerAs: 'vmEvent',
            controller: 'NewEventController',
            templateUrl: 'views/events/new.html',
          }
        }
      })
      .state('app.events.show', {
        url: '/:id',
        views: {
          'menu@app': {
            controllerAs: 'vmEvent',
            controller: 'EventController',
            templateUrl: 'views/events/show.html',
          }
        }
      })
      .state('app.events.edit', {
        url: '/edit/:id',
        views: {
          'menu@app': {
            controllerAs: 'vmEvent',
            controller: 'EditEventController',
            templateUrl: 'views/events/edit.html',
          }
        }
      });
  });

})();
