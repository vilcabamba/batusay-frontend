(function() {
  'use strict';

  angular
    .module('batusayApp')
    .controller('MainController', MainController);

  MainController.$inject = [];

  /* @ngInject */
  function MainController() {
    var vmMain = this;
    vmMain.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
})();
