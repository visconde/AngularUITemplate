'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {
    $scope.$state = $state;
    $scope.percent = 65;
    			$scope.anotherPercent = -45;
    			$scope.anotherOptions = {
    				animate:{
    					duration:1000,
    					enabled:true
    				},
    				barColor:'#2C3E50',
    				scaleColor:false,
    				lineWidth:20,
            size:300,
    				lineCap:'circle'
    			};
    $scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible) {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });
  });
