(function () {
  'use strict';

  angular
    .module('batusayApp.controllers')
    .controller('InvitesController', InvitesController);

  InvitesController.$inject = ['InvitesServices'];

  /* @ngInject */
  function InvitesController(InvitesServices){
    var invitesVM = this;

    init();

    function init(){
      InvitesServices.getInvites().then(function(response){
        invitesVM.pendingInvites = response.pending_invites; // jshint ignore:line
        invitesVM.acceptedInvites = response.accepted_invites; //jshint ignore:line
        invitesVM.rejectedInvites = response.rejected_invites; //jshint ignore:line
      });
    }
  }
})();
