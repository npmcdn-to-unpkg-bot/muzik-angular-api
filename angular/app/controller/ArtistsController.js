angular.module('musik')
    .controller('ArtistsController', function($scope, $http, api){
        $scope.title = 'artists';
        $scope.artists = null;

         $scope.begin = 0;
         $scope.count = 30;
         $scope.page = 1;

        api.getArtists().then(function(result){
            $scope.artists = result.data;
        }, function(error){
            console.log(error);
        });

         $scope.paginate = function(operator) {
             if (operator == '+' && $scope.page * $scope.count < $scope.artists.artists.length) {
                 $scope.begin += $scope.count;
                 $scope.page++;
             }
             else if (operator == '-' && $scope.page > 1) {
                 $scope.begin -= $scope.count;
                 $scope.page--;
             }
         }
    });

/*
angular.module('musik')
    .controller('ArtistsController', function($scope, $http, api, $sce){
        $scope.title = 'artists';
        $scope.artists = null;

        $scope.begin = 0;
        $scope.count = 30;
        $scope.page = 1;

        api.getArtists(id).then(function(result){
            $scope.artists = result.data;
        }, function(error){
            console.log(error);
        });

        $scope.paginate = function(operator) {
            if (operator == '+' && $scope.page * $scope.count < $scope.artists.artists.length) {
                $scope.begin += $scope.count;
                $scope.page++;
            }
            else if (operator == '-' && $scope.page > 1) {
                $scope.begin -= $scope.count;
                $scope.page--;
            }
        }
    });
    */