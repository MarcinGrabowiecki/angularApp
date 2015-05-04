'use strict';

describe('Controller: CalculatorCtrl', function () {

  // load the controller's module
  beforeEach(module('testAppApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('CalculatorCtrl', {
      $scope: scope
    });
  }));

  it('calculate proper way', function () {
    console.log(scope);
    expect(scope.calculate('2+2+2')).toBe(6);
  });
});
