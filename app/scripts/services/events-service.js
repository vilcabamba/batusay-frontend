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
        setInvitees: setInvitees,
        removeEvent: removeEvent,
        getSongs: getSongs,
        addSong: addSong,
        addTask: addTask,
        getTasks: getTasks,
        asigneeTaskToUser: asigneeTaskToUser
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

    function removeEvent(eventToRemove){
      return $http({
        method: 'DELETE',
        url: APP.apiHost + '/api/events/' + eventToRemove.id
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

    function getSongs(eventId){
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/events/' + eventId + '/songs'
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

    function addSong(eventId, song){
      return $http({
        method: 'POST',
        url: APP.apiHost + '/api/events/' + eventId + '/songs',
        data: {
          spotify_id: song.id //jshint ignore:line
        }
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

    function addTask(eventId, task){
      return $http({
        method: 'POST',
        url: APP.apiHost + '/api/events/' + eventId + '/tasks',
        data: task
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

    function getTasks(eventId){
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/events/' + eventId + '/tasks'
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

    function asigneeTaskToUser(eventId, taskId, user) {
      return $http({
        method: 'PATCH',
        url: APP.apiHost + '/api/events/' + eventId + '/tasks/' + taskId,
        data: {
          user_id: user.id // jshint ignore:line
        }
      }).then(function(response){
        return response.data;
      });
    }

  }
})();
