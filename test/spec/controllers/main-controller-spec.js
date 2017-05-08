(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('MainController', function () {
    var ctrl,
      $controller;

    beforeEach(module('batusayApp.controllers'));

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;

      ctrl = $controller('MainController');
    }));


    describe('init controller', function () {
      it('Should exist controller', function () {
        expect(ctrl).toBeTruthy();
      });
    });

  });
})();
