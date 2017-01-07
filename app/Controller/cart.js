app.controller("cartCtrl", function ($scope, $http, $routeParams, $cookies) {

    if($cookies.get('byMusic') != null){
        $scope.list = $cookies.getObject('byMusic');

        $scope.cartCount1 = $scope.list.length;

        $scope.total = 0;
        for(var i = 0; i < $scope.list.length; i++) {
            $scope.total += $scope.list[i].price;
        }
    }else{
        $scope.list = null;
        $scope.cartCount1 = 0;
    }

    $scope.deleteItemMusic = function (index) {
        //alert(index);
        itemMusic = [];
        itemMusic = $cookies.getObject('byMusic');

        itemMusic.splice(index,1);

        $cookies.remove('byMusic');

        $cookies.putObject('byMusic', itemMusic);

        $scope.list = $cookies.getObject('byMusic');
        $scope.cartCount1 = $scope.list.length;

        $scope.total = 0;
        for(var i = 0; i < $scope.list.length; i++) {
            $scope.total += $scope.list[i].price;
        }

    };

    $scope.deleteAll = function () {
        if($cookies.get('byMusic') != null){
            $cookies.remove('byMusic');
        }
    }

    $scope.pay = function () {
        if ($scope.email == null) {
            return;
        }
        var d = new Date();
        var merchant = {
            UserEmail: $scope.email,
            DateTime: d,
            Total: $scope.total
        };
        $http({
            method: "POST",
            url: "http://music-store-app-1312.herokuapp.com/api/v1/purchase",
            data: merchant,
            headers:{
                Authorization: 'bearer' + ' ' + $cookies.get('webMusicStore_cookies'),
            },

        }).then(function sucess(objet) {

            console.log(objet.data);
            $scope.purchase = objet.data._id;

            for(var i = 0; i < $scope.list.length; i++) {
                //$scope.total += $scope.list[i].price;

                var merchant = {
                    PurchaseId: $scope.purchase,
                    SongId: $scope.list[i].id,
                    Price: $scope.list[i].price,
                    AlbumId: $scope.list[i].albumId
                };
                $http({
                    method: "POST",
                    url: "http://music-store-app-1312.herokuapp.com/api/v1/purchaseitem",
                    data: merchant,
                    headers:{
                        Authorization: 'bearer' + ' ' + $cookies.get('webMusicStore_cookies'),
                    },

                }).then(function sucess(objet) {

                    console.log(objet.data);
                }, function errorCallback(response) {
                    console.log('err');
                    console.log(response);
                });

                if(i == $scope.list.length - 1){
                    alert("Thanh toán thành công!!!");
                }
            }

        }, function errorCallback(response) {
            console.log('err');
            console.log(response);
        });
    };
// Authorization: 'bearer ' + $cookies.get('webMusicStore_cookies')
});