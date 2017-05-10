(function() {
  'use strict';

  angular
    .module('batusayApp.services')
    .factory('EventsServices', EventsServices);

  EventsServices.$inject = ['$http', '$q', 'APP'];

  /* @ngInject */
  function EventsServices($http, $q, APP) {
    var service = {
        createEvent: createEvent
    };

    return service;

    function createEvent(newEvent) {
      return $http({
        method: 'POST',
        url: APP.apiHost + '/api/events',
        data: newEvent
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

  }
})();
