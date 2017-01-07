app.controller("detailAlbumCtrl", function ($scope, $http, $routeParams, $cookies) {
    $http.get('http://music-store-app-1312.herokuapp.com/api/v1/album/'+ $routeParams.id)
        .then(function (response) {
            $scope.album = response.data;
        });

    $http.get('http://music-store-app-1312.herokuapp.com/api/v1/song/album/'+ $routeParams.id)
        .then(function (response) {
            $scope.songAlbum = response.data;
        });

    $scope.checkLogin = function () {
        if($cookies.get('webMusicStore_cookies') == null){
            $cookies.remove('byMusic');
            window.location = '#/login';
        }
    };

    $scope.by = function (id, name, price, albumId) {

        $scope.checkLogin();
        //$cookies.remove('byMusic');
        if($cookies.get('byMusic') != null){

            // lấy danh sách music đã mua
            itemMusic = [];
            itemMusic = $cookies.getObject('byMusic');
            itemMusic.push({
                "id": id,
                "name": name,
                "price": price,
                "albumId": albumId
            });
            $cookies.putObject('byMusic', itemMusic);

            $scope.list = $cookies.getObject('byMusic');
            console.log($scope.list);

            $scope.cartCount1 = $scope.list.length;
        }else{
            // tạo đối tượng json arr
            itemMusic = [];
            itemMusic.push({
                "id": id,
                "name": name,
                "price": price,
                "albumId": albumId
            });
            $cookies.putObject('byMusic', itemMusic);
            $scope.list = $cookies.getObject('byMusic');
            console.log($scope.list);

            $scope.cartCount1 = $scope.list.length;
        }
    };

    if($cookies.get('byMusic') != null){
        $scope.list = $cookies.getObject('byMusic');
        $scope.cartCount1 = $scope.list.length;
    }else{
        $scope.cartCount1 = 0;
    }
});