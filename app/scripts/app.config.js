/**
 * Created by art-grig on 9/24/2016.
 */
angular
  .module('grigoryantsTestApp').config(function ($urlRouterProvider,  $stateProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider.state('main', {
      url: '/:pageName/:optional',
      templateUrl: function($stateParams) {
        console.log($stateParams);
        if ($stateParams.pageName == null) {
          $stateParams.pageName = 'main';
        }
        return '  views/' + $stateParams.pageName + '.html';
      },
      params: {
        pageName: {squash: true, value: null},
        optional: {squash: true, value: null}
      }
    })
})
