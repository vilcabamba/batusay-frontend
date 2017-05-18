(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('EditEventController', EditEventController);

    EditEventController.$inject = ['EventsServices', '$stateParams', '$state', 'toasty'];

    /* @ngInject */
    function EditEventController(EventsServices, $stateParams, $state, toasty) {
      var vmEvent = this;
      vmEvent.updateEvent = updateEvent;

      init();

      function init(){
        var id = $stateParams.id;
        EventsServices.getEvent(id).then(function(response){
          vmEvent.event = response.event;
        });
      }

      function updateEvent(){
        EventsServices.updateEvent(vmEvent.event).then(function(response){
          $state.go('app.events.index').then(function(){
            toasty.success({
              title: 'Evento actualizado!'
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
