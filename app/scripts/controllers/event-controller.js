(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('EventController', EventController);

    EventController.$inject = ['EventsServices', '$stateParams'];

    /* @ngInject */
    function EventController(EventsServices, $stateParams) {
      var vmEvent = this;

      init();

      function init(){
        var id = $stateParams.id;
        EventsServices.getEvent(id).then(function(response){
          vmEvent.event = response.event;
        });
      }
    }
})();
