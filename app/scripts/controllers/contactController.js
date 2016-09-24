/**
 * Created by art-grig on 9/24/2016.
 */
angular.module('grigoryantsTestApp')
  .controller('ContactController', function (ShareService) {
    var ctrl = this;
    ctrl.view = 'contact';
    ctrl.sharedService = ShareService;
    console.log(ShareService.data);

  });
