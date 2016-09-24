/**
 * Created by art-grig on 9/24/2016.
 */
angular.module('grigoryantsTestApp')
  .controller('AboutController', function (ShareService) {
    var ctrl = this;
    ctrl.view = 'about';
    ctrl.sharedService = ShareService;
  });
