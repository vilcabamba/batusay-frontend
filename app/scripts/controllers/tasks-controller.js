(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('TasksEventController', TasksEventController);

    TasksEventController.$inject = ['EventsServices', 'toasty', '$stateParams'];

    /* @ngInject */
    function TasksEventController(EventsServices, toasty, $stateParams) {
      var vmTasks = this,
          eventId;
      vmTasks.setUser = setUser;
      vmTasks.createTask = createTask;

      init();

      function init(){
        eventId = $stateParams.id;
        EventsServices.getTasks(eventId).then(function(response){
          vmTasks.tasks = response.tasks;
        });
        EventsServices.getInvitees(eventId).then(function(response){
          vmTasks.inviteeUsers = response.invitees.map(function(invitee){
            return invitee.user;
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

      function setUser(task){
        EventsServices.asigneeTaskToUser(eventId, task.id, task.user);
      }
    }
})();
