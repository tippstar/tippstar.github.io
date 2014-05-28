var myApp=angular.module("myApp",[]);

myApp.controller("MyCtrl",['$scope','$http','$window',function($scope,$http,$window){  
  
  $http({
    url : 'http://footballdb.herokuapp.com/api/v1/event/world.2014/teams',
    method : "GET"    
  }).then(function(response){
    $scope.data=response.data;
  });
  
}]);