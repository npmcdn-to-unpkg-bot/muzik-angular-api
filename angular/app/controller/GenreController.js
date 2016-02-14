angular.module('musik')

    .controller('GenreController', function($scope, $http, api, $routeParams){

        $scope.genre = null;
        var id = $routeParams.id;

        $scope.begin = 0;
        $scope.count = 30;
        $scope.page = 1;

        api.getGenre(id).then(function(result){
            $scope.genre = result.data;
            console.log($scope.genre)
        }, function(error){
            console.log(error);
        });

        $scope.paginate = function(operator) {
            if (operator == '+' && $scope.page * $scope.count < $scope.genre.genres.length) {
                $scope.begin += $scope.count;
                $scope.page++;
            }
            else if (operator == '-' && $scope.page > 1) {
                $scope.begin -= $scope.count;
                $scope.page--;
            }
        }
    });
