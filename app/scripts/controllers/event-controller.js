(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('EventController', EventController);

    EventController.$inject = ['EventsServices', '$stateParams', 'MapsService', '$scope', 'toasty'];

    /* @ngInject */
    function EventController(EventsServices, $stateParams, MapsService, $scope, toasty) {
      var vmEvent = this;

      init();

      function init(){
        var id = $stateParams.id;
        EventsServices.getEvent(id).then(function(response){
          vmEvent.event = response.event;
          MapsService.drawMap(vmEvent.event.name, vmEvent.event.lat, vmEvent.event.lng);
        });
        EventsServices.getSongs(id).then(function(response){
          vmEvent.songs = response.songs.map(function(row){
            return row.spotify_track; //jshint ignore:line
          });
        });
      }

      $scope.$on('add_song', function(event, song){
        var id = $stateParams.id;
        EventsServices.addSong(id, song).then(function(response){
          toasty.success({
            title: 'Canción agregada!'
          });
          vmEvent.songs.push(response.song.spotify_track); //jshint ignore:line
        }, function(error){
          console.log(error);
        });
      });
    }
})();
