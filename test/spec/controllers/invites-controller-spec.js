(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('InvitesController', function () {
    var ctrl,
      dependencies,
      $controller,
      InvitesServices,
      $q,
      deferInvites,
      $scope;

    beforeEach(module('batusayApp.controllers'));

    beforeEach(inject(function (_$controller_, _$q_, _$rootScope_) {
      $controller = _$controller_;
      $q = _$q_;
      $scope = _$rootScope_.$new();
      deferInvites = $q.defer();
      InvitesServices = {
        getInvites: function(){
          return deferInvites.promise;
        }
      };

      dependencies = {
        InvitesServices: InvitesServices
      };

      ctrl = $controller('InvitesController', dependencies);
    }));


    describe('init controller', function () {
      it('Should exist controller', function () {
        expect(ctrl).toBeTruthy();
      });

      it('Should get invites', function(){
        var responseObject = {
          pending_invites: []
        };
        deferInvites.resolve(responseObject);
        $scope.$digest();
        expect(ctrl.pendingInvites).toBe(responseObject.pending_invites);
      });
    });
  });
})();
