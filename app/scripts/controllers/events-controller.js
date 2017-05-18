(function() {
  'use strict';

  angular
    .module('batusayApp.controllers')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['EventsServices'];

  /* @ngInject */
  function EventsController(EventsServices) {
    var vmEvents = this;

    init();

    function init(){
      EventsServices.getEvents().then(function(response){
        vmEvents.events = response.events;
      });
    }
  }
})();
