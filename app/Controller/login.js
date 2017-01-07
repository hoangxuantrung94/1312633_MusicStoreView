app.controller("loginCtrl", function ($scope, $http, $cookies) {

    $scope.login  = function () {
        // use $.param jQuery function to serialize data from JSON
        if ($scope.email == null) {
            getError("INVALID_EMAIL");
            return;
        }
        if ($scope.password == null) {
            getError("INVALID_PASSWORD");
            return;
        }

        var merchant = {
            email: $scope.email,
            password: $scope.password,
        };
        $http({
            method: "POST",
            url: "http://music-store-app-1312.herokuapp.com/api/v1/login",
            data: merchant
        }).then(function sucess(objet) {

            $cookies.put('webMusicStore_cookies', objet.data.accessToken.accessToken);
            $cookies.put('webMusicStore_refreshToken', objet.data.refreshToken);

            console.log(objet.data);
            console.log($scope.email);
            console.log($scope.password);
            console.log('ok');

            window.location.reload();
            window.location = '#/';
        }, function errorCallback(response) {
            console.log(response);
            console.log($scope.email);
            console.log($scope.password);
            console.log('err');

        });
    };

    function getError(error) {
        switch (error) {
            case "INVALID_EMAIL":
                $scope.Error = "Email is invalid, please try again!";
                break;
            case "INVALID_PASSWORD":
                $scope.Error = "Password is invalid, please try again!";
                break;
            case "INVALID_USER":
                $scope.Error = "Email does not exist, please register new account.";
                break;
            case "INVALID_CONFIRM_PASSWORD":
                $scope.Error = "These passwords don't match! Please try again";
                break;
            default:
                $scope.Error = "Error logging user in:" + error;
        }
    }

});
