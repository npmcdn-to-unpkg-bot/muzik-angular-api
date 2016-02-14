angular.module('musik')
    .controller('HomeController', function($scope, $http, api){

        $scope.title = 'Accueil';
        $scope.rand = null;

        api.getRand().then(function(result){
            $scope.rand = result.data;
            console.log($scope.rand)
        }, function(error){
            console.log(error);
        });

    });