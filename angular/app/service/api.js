
angular.module('musik')
    .service('api', function($http){
        var _urlApi = 'http://localhost/Projet-Web_Rush_2/api/public/';

        return {
            getAlbums: function(){
                return $http.get(_urlApi + 'albums/');
            },
            getAlbum: function(id){
                return $http.get(_urlApi + 'albums/' + id);
            },

            getArtists: function(){
                return $http.get(_urlApi + 'artists/');
            },

            getArtist: function(id){
                return $http.get(_urlApi + 'artists/' + id);
            },

            getAlbumsArtist: function(id){
                return $http.get(_urlApi + 'albums/artist/' + id);
            },

            getGenres: function(){
                return $http.get(_urlApi + 'genres/');
            },

            getGenre: function(id){
                return $http.get(_urlApi + 'genres/' + id);
            },

            getRand: function(){
                return $http.get(_urlApi + 'albums/rand');
            }
        };

    });
