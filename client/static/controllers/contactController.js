app.controller('contactController', ['$scope', 'formFactory', '$location', function($scope, formFactory, $location){

    $scope.pageClass = 'page-contact';

    $scope.submitForm = function(){
        formFactory.processForm($scope.contact);
      	$location.url('/confirmation');
        $scope.contact = {};
    }

	
}]);