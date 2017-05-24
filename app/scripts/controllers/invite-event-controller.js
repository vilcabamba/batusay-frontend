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
        FriendsService.getFriends().then(function(response){
          vmEvent.allFriends = response.friends;
        }, function(error){
          console.log(error);
        });
        EventsServices.getInvitees(vmEvent.eventId).then(function(response){
          vmEvent.invitees = response.invitees;
        }, function(error){
          console.log(error);
        });
      }

      function moveToInvitees(item) {
        vmEvent.invitees.push(item);
        vmEvent.allFriends.splice(vmEvent.allFriends.indexOf(item), 1);
      }

      function moveToAllFriends(item) {
        vmEvent.allFriends.push(item);
        vmEvent.invitees.splice(vmEvent.invitees.indexOf(item), 1);
      }

      function invitee(){
        EventsServices.setInvitees(vmEvent.eventId, vmEvent.invitees).then(function(response){
          $state.go('app.events.show', {id: vmEvent.eventId}).then(function(){
            toasty.success({
              title: 'Evento creado!'
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
