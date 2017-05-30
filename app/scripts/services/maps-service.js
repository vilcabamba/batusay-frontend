(function() {
    'use strict';

  angular
    .module('batusayApp.services')
    .factory('MapsService', MapsService);

  MapsService.$inject = ['$http', '$q'];

  /* @ngInject */
  function MapsService($http, $q) {
      var service = {
          getAddress: getAddress,
          drawMap: drawMap
      };

      return service;

      function getAddress(lat, lon){
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(lat, lon);
        return $q(function(resolve, reject){
          geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
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

      function drawMap(title, lat, lon){
        var myLatlng = new google.maps.LatLng(lat, lon);
        var myOptions = {
          zoom: 16,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map'), myOptions);

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: title
        });
      }
  }
})();
