(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('MenuController', function () {
    var ctrl,
      dependencies,
      $controller,
      $auth,
      $state,
      $q,
      deferLogout,
      deferState,
      $scope,
      toasty;

    beforeEach(module('batusayApp.controllers'));

    beforeEach(inject(function (_$controller_, _$q_, _$rootScope_) {
      $controller = _$controller_;
      $q = _$q_;
      $scope = _$rootScope_.$new();
      deferLogout = $q.defer();
      deferState = $q.defer();
      $auth = {
        user: {
          name: 'facebook user'
        },
        signOut: function(){
          return deferLogout.promise;
        }
      };
      $state = {
        go: function(arg){
          return deferState.promise;
        }
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
    }));


    describe('init controller', function () {
      it('Should exist controller', function () {
        expect(ctrl).toBeTruthy();
      });

      it('user in controller should be from $auth', function () {
        expect(ctrl.user.name).toBe($auth.user.name);
      });
    });

    describe('functions', function(){
      it('Should show a toasty on success logout', function(){
        var spy = spyOn(toasty, 'success');
        deferLogout.resolve();
        deferState.resolve();
        ctrl.logout();
        $scope.$digest();
        expect(spy).toHaveBeenCalled();
      });
    });

  });
})();
