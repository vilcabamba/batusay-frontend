(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('InvitationController', InvitationController);

    InvitationController.$inject = ['EventsServices',
                                    '$stateParams',
                                    'MapsService',
                                    '$scope',
                                    'toasty',
                                    'InvitesServices',
                                    '$state'];

    /* @ngInject */
    function InvitationController(EventsServices,
                                  $stateParams,
                                  MapsService,
                                  $scope,
                                  toasty,
                                  InvitesServices,
                                  $state) {
      var vmInvitation = this,
          eventId = $stateParams.eventId;
      vmInvitation.acceptInvitation = acceptInvitation;
      vmInvitation.rejectInvitation = rejectInvitation;
      vmInvitation.uploadFiles = uploadFiles;

      init();

      function init(){
        var invitationId = $stateParams.inviteeId;
        InvitesServices.getInvitation(invitationId).then(function(response){
          vmInvitation.invitation = response.invite;
          vmInvitation.event = vmInvitation.invitation.event;
          MapsService.drawMap(vmInvitation.event.name, vmInvitation.event.lat, vmInvitation.event.lng);
        });
        EventsServices.getSongs(eventId).then(function(response){
          vmInvitation.songs = response.songs.map(function(row){
            return row.spotify_track; //jshint ignore:line
          });
        });
        EventsServices.getTasks(eventId).then(function(response){
          vmInvitation.tasks= response.tasks;
        });
        EventsServices.getMedia(eventId).then(function(response){
          vmInvitation.media = response.media;
        });
      }

      $scope.$on('add_song', function(event, song){
        EventsServices.addSong(eventId, song).then(function(response){
          toasty.success({
            title: 'Canción agregada!'
          });
          vmInvitation.songs.push(response.song.spotify_track); //jshint ignore:line
        }, function(error){
          console.log(error);
        });
      });

      function acceptInvitation(){
        InvitesServices.acceptInvitation(vmInvitation.invitation).then(function(response){
          $state.go('app.invited.index').then(function(){
            toasty.success({
              title: 'Has aceptado la invitación!'
            });
          });
        }, function(error){
          toasty.error({
            title: 'Ha ocurrido un error. Inténtalo nuevamente'
          });
        });
      }

      function rejectInvitation(){
        InvitesServices.rejectInvitation(vmInvitation.invitation).then(function(response){
          $state.go('app.invited.index').then(function(){
            toasty.success({
              title: 'Has rechazado la invitación!'
            });
          });
        }, function(error){
          toasty.error({
            title: 'Ha ocurrido un error. Inténtalo nuevamente'
          });
        });
      }

      function uploadFiles(files) {
        if (files && files.length) {
          EventsServices.uploadMedia(eventId, files, function callback(eventPicture){
            vmInvitation.media.push(eventPicture);
          });
        }
      }
    }
})();
