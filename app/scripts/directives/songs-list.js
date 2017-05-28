(function() {
  'use strict';

  angular
    .module('batusayApp')
    .directive('songsList', songsList);

  /* @ngInject */
  function songsList() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/directives/songs-list/songs-list.html',
      scope: {
        songList: '='.
        shouldAdd: '@'
      },
      controller: SongsListController,
      controllerAs: 'songsVm',
      bindToSongsListController: true
    };

    return directive;
  }

  SongsListController.$inject = ['$scope'];

  /* @ngInject */
  function SongsListController($scope) {
    var songsVm = this;
    songsVm.play = play;

    function play(result) {
      var song = result;
      var nowPlayingElem = $('.now-playing');
      var audioControlsElem = $('.audio-controls');

      if (song.play) {
        nowPlayingElem.hide();
        songsVm.nowPlaying[1].pause();
        songsVm.nowPlaying[0].play = false;
        return;
      }

      if (songsVm.nowPlaying && songsVm.nowPlaying[1]) {
        songsVm.nowPlaying[1].pause();
        songsVm.nowPlaying[0].play = false;
      }

      var audio = new Audio(song.preview_url); //jshint ignore:line
      audio.controls = true;
      song.play = true;

      songsVm.nowPlaying = [song, audio];
      songsVm.nowPlayingName = song.name;
      songsVm.nowPlayingArtist = $.map(song.artists, function(elem) {
        return elem.name;
      }).join(', ');

      audioControlsElem.empty().append(audio);
      nowPlayingElem.show();
      audio.play();
    }

  }
})();
