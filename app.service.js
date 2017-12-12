angular.module('myapp')
    .service('MyService', function($http, $q){

        var name = "asdf";

        this.getName = function(){
            return name;
        };

        this.setName = function(newVal){
            name = newVal;
        };

        this.getRepos = function(query){
            var defer = $q.defer();
            var url = 'https://api.github.com/search/repositories?q='+query;
            var httpPromise =  $http.get(url);
            httpPromise.then(function(res){
                var result = res.data.items;              
                var finalResponse = result
                                    .filter(function(item){
                                        return item.name.startsWith(query);
                                    })
                                    .map(function(item){
                                        return {
                                            full_name: item.full_name
                                        };
                                    });
                defer.resolve(finalResponse);
            });

            return defer.promise;

        };

    });