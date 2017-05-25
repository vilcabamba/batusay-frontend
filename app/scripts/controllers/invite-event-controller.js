(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('InviteEventController', InviteEventController);

    InviteEventController.$inject = ['$stateParams', 'FriendsService', 'EventsServices', 'toasty', '$state'];

    /* @ngInject */
    function InviteEventController($stateParams, FriendsService, EventsServices, toasty, $state) {
      var vmEvent = this;
      vmEvent.eventId = $stateParams.id;
      vmEvent.moveToAllFriends = moveToAllFriends;
      vmEvent.moveToInvitees = moveToInvitees;
      vmEvent.invitee = invitee;

      init();

      function init(){
        EventsServices.getInvitees(vmEvent.eventId).then(function(response){
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
        EventsServices.setInvitees(vmEvent.eventId, vmEvent.invitedFriends).then(function(response){
          $state.go('app.events.show', {id: vmEvent.eventId}).then(function(){
            toasty.success({
              title: 'Lista de invitados actualizada!'
            });
          });
        }, function(error){
          toasty.error({
            title: 'Existen errores!'
          });
        });
      }

    }
})();
