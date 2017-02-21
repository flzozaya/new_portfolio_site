app.controller('contactController', ['$scope', 'formFactory', '$location', function($scope, formFactory, $location){

    $scope.pageClass = 'page-contact';

    $scope.submitForm = function(){
        formFactory.processForm($scope.contact);
      	$location.url('/confirmation');
        $scope.contact = {};
    }

    // if($location.url() == '/confirmation') {
    //     setTimeout(function(){
    //         console.log('take me to /contact');
    //         $location.url('/contact');
    //     }, 5000);
    // }    

	
}]);