(function() {
  'use strict';

  angular
    .module('batusayApp.controllers')
    .controller('MainController', MainController);

  MainController.$inject = ['$auth'];

  /* @ngInject */
  function MainController($auth) {
    var vmMain = this;
    vmMain.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
})();
