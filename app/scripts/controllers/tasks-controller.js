(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('TasksEventController', TasksEventController);

    TasksEventController.$inject = ['EventsServices', 'toasty', '$stateParams'];

    /* @ngInject */
    function TasksEventController(EventsServices, toasty, $stateParams) {
      var vmTasks = this;
      vmTasks.eventId =$stateParams.id;
      vmTasks.setUser = setUser;
      vmTasks.createTask = createTask;

      init();

      function init(){
        EventsServices.getTasks(vmTasks.eventId).then(function(response){
          vmTasks.tasks = response.tasks;
        });
        EventsServices.getInvitees(vmTasks.eventId).then(function(response){
          vmTasks.inviteeUsers = response.invitees.map(function(invitee){
            return invitee.user;
          });
        });
      }

      function createTask($event){
        if ($event.which === 13 && vmTasks.task && vmTasks.task.description) {
          EventsServices.addTask(vmTasks.eventId, vmTasks.task).then(function(response){
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
        EventsServices.asigneeTaskToUser(vmTasks.eventId, task.id, task.user).then(function(response){
          toasty.success({
            title: 'Tarea asignada correctamente'
          });
        });
      }
    }
})();
