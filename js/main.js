function getData($scope, $http) {
    $http.get('http://footballdb.herokuapp.com/api/v1/event/world.2014/teams').
    success(function(data) {
        $scope.data = data;
    });
}