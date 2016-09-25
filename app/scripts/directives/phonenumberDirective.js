/**
 * Created by as on 25.09.2016.
 */
angular.module('grigoryantsTestApp')
  .directive('phoneNumber', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, el, atts, ngModel) {
        ngModel.$parsers.unshift(function(viewValue) {

          var numbers = viewValue.replace(/\D/g, ''),
            char = {0:'(',3:') ',6:' - '};
          numbers = numbers.slice(0, 10);
          viewValue = '';

          for (var i = 0; i < numbers.length; i++) {
            viewValue += (char[i]||'') + numbers[i];
          }

          el.val(viewValue);

          return viewValue;
        });

        ngModel.$formatters.push(function(modelValue) {
          return modelValue;
        });

        ngModel.$validators.phone = function(modelValue, viewValue) {
          if (modelValue) {
            return modelValue.match(/\d/g).length === 10;
          } else {
            return false;
          }
        }
      }
    }
  });
