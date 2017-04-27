app.controller('mainController', ['$scope', '$location', '$anchorScroll', 'anchorSmoothScroll', function($scope, $location, $anchorScroll, anchorSmoothScroll){

    $scope.pageClass = 'page-home';
    
    $scope.goToAboutSection = function (eID) {
        anchorSmoothScroll.scrollTo('scrollHelper');
   		$('#about-scroll').fadeOut(1500);		

    }
}]);