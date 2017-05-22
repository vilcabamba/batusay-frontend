(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('EventController', EventController);

    EventController.$inject = ['EventsServices', '$stateParams', 'MapsService'];

    /* @ngInject */
    function EventController(EventsServices, $stateParams, MapsService) {
      var vmEvent = this;

      init();

      function init(){
        var id = $stateParams.id;
        EventsServices.getEvent(id).then(function(response){
          vmEvent.event = response.event;
          MapsService.drawMap(vmEvent.event.name, vmEvent.event.lat, vmEvent.event.lng);
        });
      }
    }
})();
