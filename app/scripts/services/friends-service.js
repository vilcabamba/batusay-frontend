(function() {
    'use strict';

  angular
    .module('batusayApp.services')
    .factory('FriendsService', FriendsService);

  FriendsService.$inject = ['$http', '$q', 'APP'];

  /* @ngInject */
  function FriendsService($http, $q, APP) {
      var service = {
        getFriends: getFriends
      };

      return service;

      function getFriends(){
        return $http({
          method: 'GET',
          url: APP.apiHost + '/api/friends'
        }).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(error){
          return $q.reject(error);
        });
      }

  }
})();
