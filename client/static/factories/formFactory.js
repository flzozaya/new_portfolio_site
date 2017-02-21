app.factory('formFactory', ['$http', function($http, multipartForm){

        var factory = {};

        factory.processForm = function(data, callback){
            $http.post('/formData', data);
        }

        return factory;
}]);