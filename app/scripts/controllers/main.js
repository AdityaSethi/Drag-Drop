'use strict';

angular.module('dragDropApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.list1 = {title: 'AngularJS - Drag Me'};
  	$scope.list2 = {};
  });
