(function() {
  'use strict';

  angular
    .module('batusayApp.directives')
    .directive('spotify', spotify);

  /* @ngInject */
  function spotify() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/directives/spotify-directive/spotify-directive.html',
      controller: SpotifyController,
      controllerAs: 'spotifyVm',
      bindToController: true
    };

    return directive;
  }

  SpotifyController.$inject = ['$scope', 'SpotifyService'];

  /* @ngInject */
  function SpotifyController($scope, SpotifyService) {
    var spotifyVm = this;
    spotifyVm.search = search;
    spotifyVm.searchOnEnter = searchOnEnter;

    function search(){
      if (spotifyVm.searchTerm) {
        SpotifyService.getSongs(spotifyVm.searchTerm).then(function(response){
          spotifyVm.results = response;
        });
      }
    }

    function searchOnEnter($event){
      if ($event.which === 13) {
        search();
      }
    }
  }
})();
