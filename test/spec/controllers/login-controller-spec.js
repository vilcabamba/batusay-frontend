(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('LoginController', function () {
    var ctrl,
      dependencies,
      $controller,
      $auth,
      $state,
      $q,
      deferLogin,
      $scope;

    beforeEach(module('batusayApp.controllers'));

    beforeEach(inject(function (_$controller_, _$q_, _$rootScope_) {
      $controller = _$controller_;
      $q = _$q_;
      $scope = _$rootScope_.$new();
      deferLogin = $q.defer();
      $auth = {
        authenticate: function(arg){
          return deferLogin.promise;
        }
      };
      $state = {
        go: function(){
          return true;
        }
      };

      dependencies = {
        $auth: $auth,
        $state: $state,
      };

      ctrl = $controller('LoginController', dependencies);
    }));


    describe('init controller', function () {
      it('Should exist controller', function () {
        console.log('authhhhh', $auth);
        expect(ctrl).toBeTruthy();
      });
    });

    describe('functions', function(){
      it('Should call $state.go after authenticate', function(){
        console.log('authhhhh222222', $auth);
        var spy = spyOn($state, 'go');
        deferLogin.resolve();
        ctrl.authenticate();
        $scope.$digest();
        expect(spy).toHaveBeenCalled();
      });
    });

  });
})();
