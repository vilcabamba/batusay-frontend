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
        getEvent: getEvent,
        updateEvent: updateEvent,
        getInvitees: getInvitees,
        setInvitees: setInvitees
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

    function updateEvent(updatedEvent) {
      return $http({
        method: 'PATCH',
        url: APP.apiHost + '/api/events/' + updatedEvent.id,
        data: updatedEvent
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

    function getInvitees(eventId){
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/events/' + eventId + '/invitees'
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

    function setInvitees(eventId, users){
      var userIds = users.map(function (user){
        return user.id;
      });

      return $http({
        method: 'POST',
        url: APP.apiHost + '/api/events/' + eventId + '/invitees',
        data: {
          user_ids: userIds //jshint ignore:line
        }
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

  }
})();
