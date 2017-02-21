app.controller('confirmationController', ['$scope', '$location', function($scope, $location){
    $scope.pageClass = 'page-contact';
        setTimeout(function(){
          	$location.url('/contact');
              $scope.$apply();
        }, 10000);
}]);