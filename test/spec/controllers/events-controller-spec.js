(function () {
  'use strict';
  /*jshint camelcase:false */
  describe('EventsController', function () {
    var ctrl,
      dependencies,
      $controller,
      EventsServices,
      toasty,
      $q,
      deferEvents,
      deferRemove,
      $scope;

    beforeEach(module('batusayApp.controllers'));

    beforeEach(inject(function (_$controller_, _$q_, _$rootScope_) {
      $controller = _$controller_;
      $q = _$q_;
      $scope = _$rootScope_.$new();
      deferEvents = $q.defer();
      deferRemove = $q.defer();
      EventsServices = {
        getEvents: function(){
          return deferEvents.promise;
        },
        removeEvent: function(arg){
          return deferRemove.promise
        }
      };
      toasty = {
        success: function(){
          return true;
        }
      };

      dependencies = {
        EventsServices: EventsServices,
        toasty: toasty,
      };

      ctrl = $controller('EventsController', dependencies);
    }));


    describe('init controller', function () {
      it('Should exist controller', function () {
        expect(ctrl).toBeTruthy();
      });

      it('Should get events', function(){
        var responseObject = {
          past_events: [],
          future_events: []
        };
        deferEvents.resolve(responseObject);
        $scope.$digest();
        expect(ctrl.pastEvents).toBe(responseObject.past_events);
        expect(ctrl.futureEvents).toBe(responseObject.future_events);
      });
    });

    describe('functions', function(){
      it('Should call toasty after remove event', function(){
        var spy = spyOn(toasty, 'success');
        var responseObject = {
          past_events: [],
          future_events: []
        };
        ctrl.removeEvent(null, new Event('click'));
        deferEvents.resolve(responseObject);
        deferRemove.resolve(responseObject);
        $scope.$digest();
        expect(spy).toHaveBeenCalled();
      });
    });

  });
})();
