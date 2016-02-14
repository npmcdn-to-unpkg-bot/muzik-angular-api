angular.module('musik')

    .controller('ArtistController', function($scope, $http, api, $routeParams){


        $scope.artist = null;
        $scope.album = null;
        var id = $routeParams.id;

        api.getAlbumsArtist(id).then(function(res){
           $scope.album = res.data;
            console.log($scope.album);
        }, function(error){
            console.log(error);
        });
        api.getArtist(id).then(function(result){
            $scope.artist = result.data;
        }, function(error){
            console.log(error);
        });



    });
