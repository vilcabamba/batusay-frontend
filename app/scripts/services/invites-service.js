(function() {
  'use strict';

  angular
    .module('batusayApp.services')
    .factory('InvitesServices', InvitesServices);

  InvitesServices.$inject = ['$http', '$q', 'APP'];

  /* @ngInject */
  function InvitesServices($http, $q, APP) {
    var service = {
        getInvites: getInvites
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
  }
})();
