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
      var vmInvitation = this;
      vmInvitation.acceptInvitation = acceptInvitation;

      init();

      function init(){
        var eventId = $stateParams.eventId;
        var invitationId = $stateParams.inviteeId;
        EventsServices.getEvent(eventId).then(function(response){
          vmInvitation.event = response.event;
          MapsService.drawMap(vmInvitation.event.name, vmInvitation.event.lat, vmInvitation.event.lng);
        });
        EventsServices.getSongs(eventId).then(function(response){
          vmInvitation.songs = response.songs.map(function(row){
            return row.spotify_track; //jshint ignore:line
          });
        });
        InvitesServices.getInvitation(invitationId).then(function(response){
          vmInvitation.invitation = response.invite;
        });
      }

      $scope.$on('add_song', function(event, song){
        var id = $stateParams.eventId;
        EventsServices.addSong(id, song).then(function(response){
          toasty.success({
            title: 'Canción agregada!'
          });
          vmInvitation.songs.push(response.spotify_track); //jshint ignore:line
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
    }
})();
