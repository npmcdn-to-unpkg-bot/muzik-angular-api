angular.module('musik')
    .controller('AlbumsController', function($scope, $http, api, $sce){
        $scope.title = 'album';
        $scope.albums = [];

        $scope.begin = 0;
        $scope.count = 30;
        $scope.page = 1;

        api.getAlbums().then(function(result){
            $scope.albums = result.data;
        }, function(error){
            console.log(error);
        });

        $scope.paginate = function(operator) {
            if (operator == '+' && $scope.page * $scope.count < $scope.albums.albums.length) {
                $scope.begin += $scope.count;
                $scope.page++;
            }
            else if (operator == '-' && $scope.page > 1) {
                $scope.begin -= $scope.count;
                $scope.page--;
            }
        }
    });