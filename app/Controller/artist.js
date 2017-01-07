app.controller("artistCtrl", function ($scope, $http, $cookies) {

    $http.get('http://music-store-app-1312.herokuapp.com/api/v1/artist')
        .then(function (response) {
            $scope.artists = response.data;
        });

    if($cookies.get('byMusic') != null){
        $scope.list = $cookies.getObject('byMusic');
        $scope.cartCount1 = $scope.list.length;
    }else{
        $scope.cartCount1 = 0;
    }
});