(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('SiteController', function () {
    var ctrl,
      dependencies,
      $controller,
      APP;

    beforeEach(module('batusayApp.controllers'));

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
      APP = {
        appName: 'locote!'
      };
      dependencies = {
        APP: APP
      };

      ctrl = $controller('SiteController', dependencies);
    }));


    describe('init controller', function () {
      it('Should exist controller', function () {
        expect(ctrl).toBeTruthy();
      });

      it('appName should be the same that in constants', function () {
        expect(ctrl.appName).toBe(APP.appName);
      });
    });

  });
})();
