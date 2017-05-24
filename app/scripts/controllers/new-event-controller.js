(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('NewEventController', NewEventController);

    NewEventController.$inject = ['EventsServices', 'toasty', '$state'];

    /* @ngInject */
    function NewEventController(EventsServices, toasty, $state) {
      var vmEvent = this;
      vmEvent.createEvent = createEvent;

      function createEvent(){
        EventsServices.createEvent(vmEvent.event).then(function(response){
          $state.go('app.events.index').then(function(){
            toasty.success({
              title: 'Evento creado!'
            });
          });
        }, function(error){
          toasty.error({
            title: 'Existen errores!',
            msg: error.data.errors.join(',')
          });
        });
      }
    }
})();
