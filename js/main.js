var myApp = angular.module("myApp", []);

myApp.controller("TeamCtrl", ['$scope', '$http', '$window',
    function($scope, $http, $window) {

        $http({
            url: 'http://www.corsproxy.com/footballdb.herokuapp.com/api/v1/event/world.2014/teams',
            method: "GET"
        }).then(function(response) {
            $scope.teams = response.data;
            console.log($scope.teams);
        });

    }
]);

myApp.controller("AllRoundsCtrl", ['$scope', '$http', '$window',
    function($scope, $http, $window) {

        $http({
            url: 'http://www.corsproxy.com/footballdb.herokuapp.com/api/v1/event/world.2014/rounds',
            method: "GET"
        }).then(function(response) {
            $scope.rounds = response.data;
            console.log($scope.rounds);
        });

    }
]);