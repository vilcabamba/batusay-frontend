(function() {
  'use strict';

  angular
    .module('batusayApp.services')
    .factory('EventsServices', EventsServices);

  EventsServices.$inject = ['$http', '$q', 'APP'];

  /* @ngInject */
  function EventsServices($http, $q, APP) {
    var service = {
        createEvent: createEvent,
        getEvents: getEvents,
        getEvent: getEvent
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

    function getEvents(){
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/events'
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

    function getEvent(id){
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/events/' + id
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

  }
})();
