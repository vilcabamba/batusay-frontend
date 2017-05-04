(function() {
  'use strict';

  angular
    .module('batusayApp.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$auth'];

  /* @ngInject */
  function LoginController($auth) {
    var loginVm = this;
    loginVm.authenticate = authenticate;

    function authenticate(){
      $auth.authenticate('facebook');
    }
  }
})();
