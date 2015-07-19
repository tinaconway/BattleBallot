(function () {
  'use strict';
  angular
    .module('admin')
    .controller('AdminController', function ($scope, AdminService, $routeParams, $rootScope) {
      AdminService.getBands().then(function(bands) {
        $scope.bands = bands.data;
      });
      var getBands = function() {
        AdminService.getBands().then(function(bands) {
          $scope.bands = bands.data;
        });
      };
        AdminService.getBand($routeParams.id).then(function(band) {
        $scope.band = band;

      });
      $scope.updateBand = function(id, band) {
        console.log(band);
        console.log('i am in the update controller');
        AdminService.updateBand(id, band)
      };
      $scope.deleteBand = function(id) {
        console.log('im in deleted');
        AdminService.deleteBand(id);
      };
      $scope.addBand = function(newBand) {
        console.log(newBand);
        AdminService.addBand(newBand);
      };
      var watchCallback = function() {
      };
      $scope.authenticate = function () {
        $rootScope.isAuth = true
          console.log($rootScope.isAuth);
      };
      $scope.$on('band:deleted', getBands)
      $scope.$on('band:added', getBands)
      $scope.$on('band:updated', getBands)
    });
})();
