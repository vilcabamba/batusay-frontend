(function() {
  'use strict';

  angular
    .module('batusayApp.controllers')
    .controller('MenuController', MenuController);

  MenuController.$inject = ['$auth'];

  /* @ngInject */
  function MenuController($auth) {
    var vmMenu = this;
    vmMenu.user = $auth.user;
  }
})();
