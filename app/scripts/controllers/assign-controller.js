(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('AssignController', AssignController);

    AssignController.$inject = ['EventsServices', 'toasty', '$stateParams', 'ModalService'];

    /* @ngInject */
    function AssignController(EventsServices, toasty, $stateParams, ModalService) {
      var vmTasks = this;
      vmTasks.createTask = createTask;
      vmTasks.assign = assign;

      init();

      function init(){
        var eventId = $stateParams.id;
        EventsServices.getInvitees(eventId).then(function(response){
          vmTasks.invitedFriends = response.invitees.map(function(invitee){
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

      function assign(task){
        ModalService.showModal({
          templateUrl: 'views/events/assign.html',
          controller: 'AssignController'
        }).then(function(modal) {

          //it's a bootstrap element, use 'modal' to show it
          modal.element.modal();
          modal.close.then(function(result) {
            console.log(result);
          });
        });
      }

      function createTask($event){
        if ($event.which === 13 && vmTasks.task && vmTasks.task.description) {
          var id = $stateParams.id;
          EventsServices.addTask(id, vmTasks.task).then(function(response){
            vmTasks.tasks.push(response.task);
            vmTasks.task = null;
          }, function(error){
            toasty.error({
              title: 'Existen errores!',
              msg: error.data.errors.join(',')
            });
          });
        }
      }
    }
})();
