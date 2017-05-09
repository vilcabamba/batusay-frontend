(function() {
  'use strict';

  angular
    .module('batusayApp.controllers')
    .controller('EventsController', EventsController);

  EventsController.$inject = [];

  /* @ngInject */
  function EventsController() {
    var vmEvents = this;
  }
})();
