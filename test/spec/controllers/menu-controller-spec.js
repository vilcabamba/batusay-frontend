(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('MenuController', function () {
    var ctrl,
      dependencies,
      $controller,
      $auth,
      $state,
      toasty;

    beforeEach(module('batusayApp.controllers'));

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
      $auth = {
        user: {
          name: 'facebook user'
        }
      };
      $state = {
        go: function(){return true;}
      };
      toasty = {
        success: function(){return true;}
      };
      dependencies = {
        $auth: $auth,
        $state: $state,
        toasty: toasty
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
