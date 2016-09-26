/**
 * Created by art-grig on 9/24/2016.
 */
angular.module('grigoryantsTestApp')
  .controller('ContactController', function ($scope, ShareService) {
    $scope.view = 'contact';
    $scope.sharedService = ShareService;
    $scope.sum = 300;
    $scope.first = 100;
    $scope.second = 100;
    $scope.third = 100;
    $scope.recalculate = function (bool) {
      if (bool) {
        $scope.sum = $scope.first + $scope.second + $scope.third;
      }
      else {
        $scope.first = Math.floor($scope.sum / 3);
        $scope.second = Math.floor($scope.sum / 3);
        $scope.third = $scope.sum - $scope.first - $scope.second;
      }
    }
  });
