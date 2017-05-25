(function() {
  'use strict';

  angular
    .module('batusayApp.controllers')
    .controller('MenuController', MenuController);

  MenuController.$inject = ['$auth', '$state', 'toasty'];

  /* @ngInject */
  function MenuController($auth, $state, toasty) {
    var vmMenu = this;
    vmMenu.user = $auth.user;
    vmMenu.logout = logout;

    function logout(){
      $auth.signOut()
        .then(function(response) {
          $state.go('login').then(function(){
            toasty.success({
              title: 'Gracias!'
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
})();
