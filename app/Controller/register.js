app.controller("registerCtrl", function ($scope, $http, $cookies) {

    $scope.createAccount  = function () {
        // use $.param jQuery function to serialize data from JSON
        if ($scope.newEmail == null) {
            getError("INVALID_EMAIL");
            return;
        }
        if ($scope.newEmail == null) {
            getError("INVALID_PASSWORD");
            return;
        }
        if ($scope.newPassword != $scope.confirmPassword || $scope.confirmPassword == null) {
            getError("INVALID_CONFIRM_PASSWORD");
            return;
        }

        //window.location = '#/';
        /*var req = {
         method: 'POST',
         url: 'http://localhost:3000/api/v1/signup',
         headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
         },
         transformRequest: transformRequestAsFormPost,
         data:  {email: $scope.newEmail, password: $scope.password, displayName: 'viet'}
         }

         $http(req).success(function(res){
         console.log($scope.newEmail),
         console.log(res),
         window.location = '#/'
         }).
         error(function(){
         console.log('err')
         });*/

        // use $.param jQuery function to serialize data from JSON
        /*var data = $.param({
            'email': $scope.newEmail,
            'password': $scope.password
            //displayName: 'viet'
        });

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('http://localhost:3000/api/v1/signup', data, config)
            .success(function (data, status, headers, config) {
                //$scope.PostDataResponse = data;
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
                console.log('ok');
                window.location = '#/';
            })
            .error(function (data, status, header, config) {
                /*$scope.ResponseDetails = "Data: " + data +
                 "<hr />status: " + status +
                 "<hr />headers: " + header +
                 "<hr />config: " + config;//

                console.log(data);
                console.log('err');
            });*/
        var merchant = {
            email: $scope.newEmail,
            password: $scope.newPassword,
            displayName: 'viet',
        };
        $http({
            method: "POST",
            url: "http://music-store-app-1312.herokuapp.com/api/v1/signup",
            data: merchant
        }).then(function sucess(objet) {
            $cookies.put('webMusicStore_cookies', objet.data.accessToken.accessToken);
            $cookies.put('webMusicStore_refreshToken', objet.data.refreshToken);

            console.log($cookies.get('webMusicStore_cookies'));
            console.log($cookies.get('webMusicStore_refreshToken'));

            console.log(objet.data);
            console.log(objet.data.accessToken.accessToken);
            console.log(objet.data.refreshToken);
            console.log('ok');

            window.location.reload();
            window.location = '#/';

        }, function errorCallback(response) {
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