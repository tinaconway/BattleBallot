(function () {
  'use strict';
  angular
    .module('admin')
    .factory('AdminService', function ($http, $rootScope) {

    var url = '';
    var getBands = function() {
      $http.get(url);
    };

    var addBand = function(newBand) {
      $http.post(url, newBand).success(function(resp) {
        $rootScope.$broadcast('band:added');
      })
    };

    var deleteBand = function(id) {
      $http.delete(url + '/' + id).success(function(resp) {
        $rootScope.$broadcast('band:deleted');
      })
    };

    var updateBand = function(id, updatedBand) {
      $http.put(url + '/' + id).success(function(resp) {
        $rootScope.$broadcast('band:updated');
      })
    };


  return {
    getBands: getBands,
    addBand: addBand,
    deleteBand: deleteBand,
    updateBand: updateBand
  }


    });
})();