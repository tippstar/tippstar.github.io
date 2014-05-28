var myApp = angular.module("myApp", []);

// myApp.config(function($routeProvider) {
// 	$routeProvider.when('/teams', {
// 		templateUrl: 'views/teams.html',
// 		controller: 'AllTeamsCtrl'
// 	})
// 	.when('/groups', {
// 		templateUrl: 'views/groups.html',
// 		controller: 'AllGroupsCtrl'
// 	})
// 	.when('/matchday', {
// 		templateUrl: 'views/matchday.html',
// 		controller: 'ProfileCtrl'
// 	});
// 	$routeProvider.otherwise({ redirectTo: '/error' });
// });

myApp.controller("AllTeamsCtrl", ['$scope', '$http', '$window',
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

myApp.controller("AllGamesCtrl", ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        $http({
            url: 'http://www.corsproxy.com/footballdb.herokuapp.com/api/v1/event/world.2014/round/1',
            method: "GET"
        }).then(function(response) {
            $scope.playday = response.data;
            console.log($scope.playday);
        });
    }
]);