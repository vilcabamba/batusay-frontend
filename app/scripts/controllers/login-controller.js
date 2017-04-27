(function() {
  'use strict';

  angular
    .module('batusayApp.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = [];

  /* @ngInject */
  function LoginController() {
    var loginVm = this;
  }
})();
