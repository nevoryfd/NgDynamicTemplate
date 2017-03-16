angular.module("testapp",[])
  .controller("dynamicCtrl",["$scope",
    function($scope){
      $scope.message="Hello Template!";
      $scope.data = {state:'oh',pacode:'02058',car:"Ford Focus",MSRP:1000000}
    }
  ]).directive("dyntemp",function(){
    return {
      template:'<div ng-include="getTemplateUrl()"></div>',
      scope:{
          data:'=data'
      },
      restrict: 'E',
      controller : function($scope){
        $scope.getTemplateUrl = function(){
          return 'stack.'+$scope.data.state+'.'+$scope.data.pacode+'.html';
        }
      }
    }
  });
