(function() {
    'use strict';

  angular
    .module('batusayApp.services')
    .factory('MapsService', MapsService);

  MapsService.$inject = ['$http', '$q'];

  /* @ngInject */
  function MapsService($http, $q) {
      var service = {
          getAddress: getAddress
      };

      return service;

      function getAddress(lat, lon) {
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(lat, lon);
        return $q(function(resolve, reject){
          geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              console.log(results);
              if (results[0]) {
                resolve(results[0].formatted_address); //jshint ignore:line
              } else {
                resolve('Not found');
              }
            } else {
              reject('Geocoder failed due to: ' + status);
            }
          });
        });
      }
  }
})();
