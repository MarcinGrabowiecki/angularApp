'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('CalculatorCtrl', function ($scope) {
    $scope.result='no result yet...';
    $scope.input='2+2';
    $scope.calculate=function(i){
        return eval(i);
    }
  });
