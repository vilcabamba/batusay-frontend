(function() {
    'use strict';

    angular
        .module('batusayApp.controllers')
        .controller('NewEventController', NewEventController);

    NewEventController.$inject = [];

    /* @ngInject */
    function NewEventController() {
        var vmEvent = this;
        vmEvent.createEvent = createEvent;

        function createEvent(){
          console.log('yeah');
        }
    }
})();
