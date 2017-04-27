app.controller('workController', ['$scope', '$location', 'webWorkFactory', '$ocLazyLoad', function($scope, $location, webWorkFactory, $ocLazyLoad){

    $scope.pageClass = 'page-work';
    $scope.webWork = webWorkFactory.work;
    
    $ocLazyLoad.load({
        files: [
            'assets/js/classie.js',
            'assets/js/dynamics.min.js',
            'assets/js/main.js',
            'assets/js/previewbg-fix.js'
        ],
        cache: false
    });
}]);