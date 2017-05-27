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
    spotifyVm.play = play;

    function search(){
      SpotifyService.getSongs(spotifyVm.searchTerm).then(function(response){
        spotifyVm.results = response;
      });
    }

    function play(result) {
      var song = result;
      var nowPlayingElem = $('#now-playing');
      var audioControlsElem = $('.audio-controls');

      if (song.play) {
        nowPlayingElem.hide();
        spotifyVm.nowPlaying[1].pause();
        spotifyVm.nowPlaying[0].play = false;
        return;
      }

      if (spotifyVm.nowPlaying && spotifyVm.nowPlaying[1]) {
        spotifyVm.nowPlaying[1].pause();
        spotifyVm.nowPlaying[0].play = false;
      }

      var audio = new Audio(song.preview_url); //jshint ignore:line
      audio.controls = true;
      song.play = true;

      spotifyVm.nowPlaying = [song, audio];
      spotifyVm.nowPlayingName = song.name;
      spotifyVm.nowPlayingArtist = $.map(song.artists, function(elem) {
        return elem.name;
      }).join(', ');

      audioControlsElem.empty().append(audio);
      nowPlayingElem.show();
      audio.play();
    }
  }
})();
