
app.controller("navigationbarCtrl", function ($scope, $cookies) {

        if($cookies.get('webMusicStore_cookies') != null){
            $scope.isAuthData = true;
            console.log('cookies' + $cookies.get('webMusicStore_cookies'));
        }else{
            $scope.isAuthData = false;
        }
        /*$scope.checkLogin = function () {
            if($cookies.get('webMusicStore_cookies') != null){
                $scope.isAuthData = true;
                console.log('cookies' + $cookies.get('webMusicStore_cookies'));
            }else{
                $scope.isAuthData = false;
            }
        };*/
        $scope.logiut = function () {
            $cookies.remove('webMusicStore_cookies');
            $cookies.remove('webMusicStore_refreshToken');
            $cookies.remove('byMusic');
            window.location.reload();
        };
    }
);