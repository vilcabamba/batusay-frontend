(function() {
    'use strict';

    angular
      .module('batusayApp.controllers')
      .controller('NewEventController', NewEventController);

    NewEventController.$inject = ['currentUser', 'EventsServices'];

    /* @ngInject */
    function NewEventController(currentUser, EventsServices) {
      var vmEvent = this;
      vmEvent.createEvent = createEvent;

      function createEvent(){
        vmEvent.event.user_id = currentUser.id; //jshint ignore:line
        EventsServices.createEvent(vmEvent.event).then(function(response){
          console.log(response);
        }, function(error){
          console.log(error);
        });
      }
    }
})();
