app.controller("detailArtistCtrl", function ($scope, $http, $routeParams, $cookies) {
    $http.get('http://music-store-app-1312.herokuapp.com/api/v1/artist/'+ $routeParams.id)
        .then(function (response) {
            $scope.artist = response.data;
        });

    if($cookies.get('byMusic') != null){
        $scope.list = $cookies.getObject('byMusic');
        $scope.cartCount1 = $scope.list.length;
    }else{
        $scope.cartCount1 = 0;
    }
});