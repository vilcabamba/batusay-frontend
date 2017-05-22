(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('InviteEventController', InviteEventController);

    InviteEventController.$inject = ['$stateParams', 'FriendsService'];

    /* @ngInject */
    function InviteEventController($stateParams, FriendsService) {
      var vmEvent = this;
      vmEvent.eventId = $stateParams.id;
      vmEvent.moveToAllFriends = moveToAllFriends;
      vmEvent.moveToListB = moveToListB;

      vmEvent.listB = [{id:6}];

      init();

      function init(){
        FriendsService.getFriends().then(function(response){
          vmEvent.allFriends = response.friends;
        }, function(error){
          console.log(error);
        });
      }

      function moveToListB (item) {
        vmEvent.listB.push(item);
        vmEvent.allFriends.splice(vmEvent.allFriends.indexOf(item), 1);
      }

      function moveToAllFriends(item) {
        vmEvent.allFriends.push(item);
        vmEvent.listB.splice(vmEvent.listB.indexOf(item), 1);
      }


    }
})();
