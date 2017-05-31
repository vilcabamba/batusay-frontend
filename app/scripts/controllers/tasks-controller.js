(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('TasksEventController', TasksEventController);

    TasksEventController.$inject = ['EventsServices', 'toasty', '$stateParams'];

    /* @ngInject */
    function TasksEventController(EventsServices, toasty, $stateParams) {
      var vmTasks = this;
      vmTasks.createTask = createTask;

      init();

      function init(){
        var id = $stateParams.id;
        EventsServices.getTasks(id).then(function(response){
          vmTasks.tasks = response.tasks;
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
