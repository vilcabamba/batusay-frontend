(function() {
  'use strict';

  angular
    .module('batusayApp.controllers')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['EventsServices'];

  /* @ngInject */
  function EventsController(EventsServices) {
    var vmEvents = this;
    vmEvents.removeEvent = removeEvent;

    init();

    function init(){
      EventsServices.getEvents().then(function(response){
        vmEvents.pastEvents = response.past_events; //jshint ignore:line
        vmEvents.futureEvents = response.future_events; //jshint ignore:line
      });
    }

    function removeEvent(eventToRemove, $event){
      $event.stopPropagation();
      EventsServices.removeEvent(eventToRemove).then(function(response){
        console.log(response);
      }, function(error){
        console.log(error);
      });
    }
  }
})();
