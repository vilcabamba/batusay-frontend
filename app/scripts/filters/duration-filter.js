(function() {
  'use strict';

  angular
    .module('batusayApp.filters')
    .filter('momentDuration', momentDuration);

  function momentDuration() {
    return filter;

    function filter(milliseconds) {
      var duration = moment.duration(milliseconds)._data;
      return duration.minutes + ':' + duration.seconds;
    }
  }
})();
