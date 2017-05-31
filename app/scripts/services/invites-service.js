(function() {
  'use strict';

  angular
    .module('batusayApp.services')
    .factory('InvitesServices', InvitesServices);

  InvitesServices.$inject = ['$http', '$q', 'APP'];

  /* @ngInject */
  function InvitesServices($http, $q, APP) {
    var service = {
        getInvites: getInvites,
        acceptInvitation: acceptInvitation,
        getInvitation: getInvitation,
        rejectInvitation: rejectInvitation
    };

    return service;

    function getInvites(){
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/invites'
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

    function getInvitation(invitationId){
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/invites/' + invitationId
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

    function acceptInvitation(invitation){
      return $http({
        method: 'POST',
        url: APP.apiHost + '/api/invites/' + invitation.id + '/accept',
        data: {}
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }

    function rejectInvitation(invitation){
      return $http({
        method: 'POST',
        url: APP.apiHost + '/api/invites/' + invitation.id + '/reject',
        data: {}
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(error){
        return $q.reject(error);
      });
    }
  }
})();
