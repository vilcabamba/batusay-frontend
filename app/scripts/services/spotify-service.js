(function() {
    'use strict';

  angular
    .module('batusayApp.services')
    .factory('SpotifyService', SpotifyService);

  SpotifyService.$inject = ['$http', '$q', 'APP'];

  /* @ngInject */
  function SpotifyService($http, $q, APP) {
      var service = {
        getSongs: getSongs
      };

      return service;

      function getSongs(searchTerm){
        return $http({
          method: 'GET',
          url: APP.apiHost + '/api/search',
          params: {
            q: searchTerm
          }
        }).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(error){
          return $q.reject(error);
        });
      }

  }
})();
