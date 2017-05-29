(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('EventController', function () {
    var ctrl,
      dependencies,
      $controller,
      EventsServices,
      $stateParams,
      MapsService,
      $q,
      deferEvent,
      $scope;

    beforeEach(module('batusayApp.controllers'));

    beforeEach(inject(function (_$controller_, _$q_, _$rootScope_) {
      $controller = _$controller_;
      $q = _$q_;
      $scope = _$rootScope_.$new();
      deferEvent = $q.defer();
      EventsServices = {
        getEvent: function(arg){
          return deferEvent.promise;
        }
      };
      $stateParams = {
        id: 1
      };
      MapsService = {
        drawMap: function(){
          return true;
        }
      };

      dependencies = {
        EventsServices: EventsServices,
        $stateParams: $stateParams,
        MapsService: MapsService
      };

      ctrl = $controller('EventController', dependencies);
    }));


    describe('init controller', function () {
      it('Should exist controller', function () {
        expect(ctrl).toBeTruthy();
      });

      it('Should get event and set it into controller', function(){
        var responseObject = {
          event: {
            id: 1,
            name: 'evento1',
            lat: 12312313,
            lng: 1312312321
          }
        };
        deferEvent.resolve(responseObject);
        $scope.$digest();
        expect(ctrl.event).toBe(responseObject.event);
      });

      it('Should call MapsService.drawMap', function(){
        var spy = spyOn(MapsService, 'drawMap');
        var responseObject = {
          event: {
            id: 1,
            name: 'evento1',
            lat: 12312313,
            lng: 1312312321
          }
        };
        deferEvent.resolve(responseObject);
        $scope.$digest();
        expect(spy).toHaveBeenCalled();
      });
    });

  });
})();
