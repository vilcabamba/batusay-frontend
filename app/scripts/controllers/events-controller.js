(function() {
  'use strict';

  angular
    .module('batusayApp.controllers')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['EventsServices', 'toasty'];

  /* @ngInject */
  function EventsController(EventsServices, toasty) {
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
        var index = vmEvents.futureEvents.indexOf(eventToRemove);
        vmEvents.futureEvents.splice(index, 1);
        toasty.success({
          title: 'Evento eliminado!'
        });
      }, function(error){
        console.log(error);
      });
    }
  }
})();
