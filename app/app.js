
var app = angular.module('MusicStore',["ngSanitize", "ngAnimate", "ngRoute", "ngCookies"]);

var cartCount = 0;
var itemMusic = [];
    app.component('navigationbar',{
        templateUrl: './views/widgets/navigationBar/navigationBar.html',
        controller: 'navigationbarCtrl'
    });

    app.component('footer',{
        templateUrl: './views/footer/footer.html',
        controller: 'footerCtrl'
    });

    app.component('userLogin',{
        templateUrl: './views/widgets/userNavigation/userLogin.html',
        controller: 'navigationbarCtrl'
    });

    app.component('userLogout',{
        templateUrl: './views/widgets/userNavigation/userLogout.html',
        controller: 'navigationbarCtrl'
    });

    app.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/home',{
            templateUrl: './views/home/home.html',
            controller: 'homeCtrl'
        }).
        when('/login',{
            templateUrl: './views/login/login.html',
            controller: 'loginCtrl'
        }).
        when('/register',{
            templateUrl: './views/login/register/register.html',
            controller: 'registerCtrl'
        }).
        when('/album',{
            templateUrl: './views/album/album.html',
            controller: 'albumCtrl'
        }).
        when('/album/:id',{
            templateUrl: './views/detailAlbum/detailAlbum.html',
            controller: 'detailAlbumCtrl'
        }).
        when('/artist',{
            templateUrl: './views/artist/artist.html',
            controller: 'artistCtrl'
        }).
        when('/artist/:id',{
            templateUrl: './views/detailArtist/detailArtist.html',
            controller: 'detailArtistCtrl'
        }).
        when('/genre',{
            templateUrl: './views/genre/genre.html',
            controller: 'genreCtrl'
        }).
        when('/genre/:id',{
            templateUrl: './views/detailSongOfGenre/detailSongOfGenre.html',
            controller: 'detailSongOfGenreCtrl'
        }).
        when('/cart',{
            templateUrl: './views/shopping-cart/shopping-cart.html',
            controller: 'cartCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }]);
