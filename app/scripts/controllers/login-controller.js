(function() {
  'use strict';

  angular
    .module('batusayApp.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$auth', '$state'];

  /* @ngInject */
  function LoginController($auth, $state) {
    var loginVm = this;
    loginVm.authenticate = authenticate;

    function authenticate(){
      $auth.authenticate('facebook').then(function(){
        $state.go('app.dashboard');
      }).catch(function(){
        console.log('error');
      });
    }
  }
})();
