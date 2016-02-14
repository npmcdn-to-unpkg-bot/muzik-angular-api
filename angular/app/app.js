
angular.module('musik', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider

            .when('/home', {
                templateUrl : 'app/view/home.html',
                controller  : 'HomeController'
            })

            .when('/albums', {
                templateUrl : 'app/view/albums.html',
                controller  : 'AlbumsController'
            })

            .when('/album/:id', {
                templateUrl : 'app/view/album.html',
                controller  : 'AlbumController'
            })

            .when('/artists', {
                templateUrl : 'app/view/artists.html',
                controller  : 'ArtistsController'
            })

            .when('/artist/:id', {
                templateUrl : 'app/view/artist.html',
                controller  : 'ArtistController'
            })

            .when('/genres', {
                templateUrl : 'app/view/genres.html',
                controller  : 'GenresController'
            })

            .when('/genre/:id', {
                templateUrl : 'app/view/genre.html',
                controller  : 'GenreController'
            })

            .otherwise({
                redirectTo : '/home'
            })


    });

