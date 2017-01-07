app.controller("albumCtrl", function ($scope, $http, $cookies) {

    $http.get('http://music-store-app-1312.herokuapp.com/api/v1/album')
        .then(function (response) {
            $scope.albums = response.data;
        });
    if($cookies.get('byMusic') != null){
        $scope.list = $cookies.getObject('byMusic');
        $scope.cartCount1 = $scope.list.length;
    }else{
        $scope.cartCount1 = 0;
    }

});