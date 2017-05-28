(function() {
  'use strict';

  angular
    .module('batusayApp.directives')
    .directive('nowPlaying', nowPlaying);

  /* @ngInject */
  function nowPlaying() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/directives/now-playing/now-playing.html',
      scope: {
      },
      controller: NowPlayingController,
      controllerAs: 'nowPlayingVm',
      bindToController: true
    };

    return directive;
  }

  NowPlayingController.$inject = ['$scope'];

  /* @ngInject */
  function NowPlayingController($scope) {
      var nowPlayingVm = this;

      $scope.$on('play_song', function(event, songComing){
        var song = songComing;
        var nowPlayingElem = $('.now-playing');
        var audioControlsElem = $('.audio-controls');

        if (song.play) {
          nowPlayingElem.hide();
          nowPlayingVm.nowPlaying[1].pause();
          nowPlayingVm.nowPlaying[0].play = false;
          return;
        }

        if (nowPlayingVm.nowPlaying && nowPlayingVm.nowPlaying[1]) {
          nowPlayingVm.nowPlaying[1].pause();
          nowPlayingVm.nowPlaying[0].play = false;
        }

        var audio = new Audio(song.preview_url); //jshint ignore:line
        audio.controls = true;
        song.play = true;

        nowPlayingVm.nowPlaying = [song, audio];
        nowPlayingVm.nowPlayingName = song.name;
        nowPlayingVm.nowPlayingArtist = $.map(song.artists, function(elem) {
          return elem.name;
        }).join(', ');

        audioControlsElem.empty().append(audio);
        nowPlayingElem.show();
        audio.play();
      });
  }
})();
