angular.module('myapp')
    .service('MyService', function($http){

        var name = "asdf";

        this.getName = function(){
            return name;
        };

        this.setName = function(newVal){
            name = newVal;
        };

        this.getRepos = function(query){
            var url = 'https://api.github.com/search/repositories?q='+query;
            return $http.get(url);
        };

    });