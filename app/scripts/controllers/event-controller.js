(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('EventController', EventController);

    EventController.$inject = ['EventsServices',
                               '$stateParams',
                               'MapsService',
                               '$scope',
                               'toasty',
                               'FriendsService'];

    /* @ngInject */
    function EventController(EventsServices,
                             $stateParams,
                             MapsService,
                             $scope,
                             toasty,
                             FriendsService) {
      var vmEvent = this,
      eventId = $stateParams.id;
      vmEvent.moveToAllFriends = moveToAllFriends;
      vmEvent.moveToInvitees = moveToInvitees;
      vmEvent.invitee = invitee;
      vmEvent.uploadFiles = uploadFiles;

      init();

      function init(){
        EventsServices.getEvent(eventId).then(function(response){
          vmEvent.event = response.event;
          MapsService.drawMap(vmEvent.event.name, vmEvent.event.lat, vmEvent.event.lng);
          vmEvent.couldEdit = moment().diff(vmEvent.event.date, 'minutes') <= 0;
          console.log(vmEvent.couldEdit);
        });
        EventsServices.getSongs(eventId).then(function(response){
          vmEvent.songs = response.songs.map(function(row){
            return row.spotify_track; //jshint ignore:line
          });
        });
        EventsServices.getInvitees(eventId).then(function(response){
          vmEvent.invitedFriends = response.invitees.map(function(invitee){
            return invitee.user;
          });
          FriendsService.getFriends().then(function(response){
            vmEvent.allFriends = response.friends.filter(function(friend){
              return !_.some(vmEvent.invitedFriends, friend);
            });
          }, function(error){
            console.log(error);
          });
        }, function(error){
          console.log(error);
        });
        EventsServices.getMedia(eventId).then(function(response){
          vmEvent.media = response.media;
        });
      }

      function moveToInvitees(user) {
        vmEvent.invitedFriends.push(user);
        vmEvent.allFriends.splice(vmEvent.allFriends.indexOf(user), 1);
      }

      function moveToAllFriends(user) {
        vmEvent.allFriends.push(user);
        vmEvent.invitedFriends.splice(vmEvent.invitedFriends.indexOf(user), 1);
      }

      function invitee(){
        EventsServices.setInvitees(eventId, vmEvent.invitedFriends).then(function(response){
          toasty.success({
            title: 'Lista de invitados actualizada!'
          });
        }, function(error){
          toasty.error({
            title: 'Existen errores!'
          });
        });
      }

      function uploadFiles(files) {
        if (files && files.length) {
          EventsServices.uploadMedia(eventId, files, function callback(eventPicture){
            vmEvent.media.push(eventPicture);
          });
        }
      }

      $scope.$on('add_song', function(event, song){
        EventsServices.addSong(eventId, song).then(function(response){
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
