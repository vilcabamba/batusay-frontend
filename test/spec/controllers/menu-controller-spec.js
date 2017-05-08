(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('MenuController', function () {
    var ctrl,
      dependencies,
      $controller,
      $auth;

    beforeEach(module('batusayApp.controllers'));

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
      $auth = {
        user: {
          name: 'facebook user'
        }
      };
      dependencies = {
        $auth: $auth
      };

      ctrl = $controller('MenuController', dependencies);
      console.log(ctrl);
    }));


    describe('init controller', function () {
      it('Should exist controller', function () {
        expect(ctrl).toBeTruthy();
      });

      it('user in controller should be from $auth', function () {
        expect(ctrl.user.name).toBe($auth.user.name);
      });
    });

  });
})();
