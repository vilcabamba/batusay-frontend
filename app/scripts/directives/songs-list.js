(function() {
  'use strict';

  angular
    .module('batusayApp.directives')
    .directive('songsList', songsList);

  /* @ngInject */
  function songsList() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/directives/songs-list/songs-list.html',
      scope: {
        songList: '=',
        shouldAdd: '@'
      },
      controller: SongsListController,
      controllerAs: 'songsVm',
      bindToController: true
    };

    return directive;
  }

  SongsListController.$inject = ['$rootScope'];

  /* @ngInject */
  function SongsListController($rootScope) {
    var songsVm = this;
    songsVm.play = play;

    function play(result) {
      $rootScope.$broadcast('play_song', result);
    }

  }
})();
