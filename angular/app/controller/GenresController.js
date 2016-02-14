angular.module('musik')

    .controller('GenresController', function($scope, $http, api){


        $scope.genres = null;

        api.getGenres().then(function(result){
            $scope.genres = result.data;
            console.log($scope.genres)
        }, function(error){
            console.log(error);
        });

    });
