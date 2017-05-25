(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('EditEventController', EditEventController);

    EditEventController.$inject = ['EventsServices', '$stateParams', '$state', 'toasty', 'MapsService'];

    /* @ngInject */
    function EditEventController(EventsServices, $stateParams, $state, toasty, MapsService) {
      var vmEvent = this;
      vmEvent.updateEvent = updateEvent;

      init();

      function init(){
        var id = $stateParams.id;
        EventsServices.getEvent(id).then(function(response){
          vmEvent.event = response.event;
          MapsService.getAddress(vmEvent.event.lat, vmEvent.event.lng).then(function(response){
            vmEvent.event.address = response;
          }, function(error){
            console.log('no address' + error);
          });
        });
      }

      function updateEvent(){
        EventsServices.updateEvent(vmEvent.event).then(function(response){
          $state.go('app.events.show', {id: vmEvent.event.id}).then(function(){
            toasty.success({
              title: 'Evento actualizado!'
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
