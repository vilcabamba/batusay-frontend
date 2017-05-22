(function() {
  'use strict';

  angular
    .module('batusayApp.filters')
    .filter('momentDate', momentDate);

  function momentDate() {
    return filter;

    function filter(date) {
        return moment(date).format('dddd, MMMM DD YYYY, h:mm:ss a');
    }
  }
})();
