angular.module('musik')

    .controller('AlbumController', function($scope, $http, api, $routeParams){


        $scope.musicSelected = undefined;
        $scope.title = 'album';
        $scope.album = null;
        var id = $routeParams.id;

        $scope.selectMusic = function(url) {
            $scope.musicSelected = url;
            console.log($scope.musicSelected);
        };

        api.getAlbum(id).then(function(result){
            $scope.album = result.data;
        }, function(error){
            console.log(error);
        });



    });