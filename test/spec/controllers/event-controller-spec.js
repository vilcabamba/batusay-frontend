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
      FriendsService,
      $q,
      deferEvent,
      deferredSongs,
      deferInvitees,
      deferMedia,
      toasty,
      $scope;

    beforeEach(module('batusayApp.controllers'));

    beforeEach(inject(function (_$controller_, _$q_, _$rootScope_) {
      $controller = _$controller_;
      $q = _$q_;
      $scope = _$rootScope_.$new();
      deferEvent = $q.defer();
      deferredSongs = $q.defer();
      deferInvitees = $q.defer();
      deferMedia = $q.defer();
      EventsServices = {
        getEvent: function(arg){
          return deferEvent.promise;
        },
        getSongs: function(arg){
          return deferredSongs.promise;
        },
        getInvitees: function(arg){
          return deferInvitees.promise;
        },
        getMedia: function(){
          return deferMedia.promise;
        }
      };
      FriendsService = {
        getFriends: function(){
          return true;
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
      toasty = {
        success: function(){
          return true;
        }
      };

      dependencies = {
        EventsServices: EventsServices,
        $stateParams: $stateParams,
        MapsService: MapsService,
        $scope: $scope,
        toasty: toasty,
        FriendsService: FriendsService
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

      it('Should get event songs and set them in controller', function(){
        var responseSong = { spotify_track: {} },
            responseObject = { songs: [responseSong] };
        deferredSongs.resolve(responseObject);
        $scope.$digest();
        expect(ctrl.songs).toContain(responseSong.spotify_track);
      });

      it('Should call MapsService.drawMap', function(){
        var spy = spyOn(MapsService, 'drawMap');
        var responseObject = {
          event: {
            id: 1,
            name: 'evento1',
            lat: 12312313,
            lng: 1312312321,
            songs: []
          }
        };
        deferEvent.resolve(responseObject);
        $scope.$digest();
        expect(spy).toHaveBeenCalled();
      });
    });

  });
})();
