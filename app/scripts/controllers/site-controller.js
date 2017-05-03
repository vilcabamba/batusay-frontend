(function() {
  'use strict';

  angular
      .module('batusayApp.controllers')
      .controller('SiteController', SiteController);

  SiteController.$inject = ['APP'];

  /* @ngInject */
  function SiteController(APP) {
      var siteVm = this;
      siteVm.appName = APP.appName;
  }
})();
