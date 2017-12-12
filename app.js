angular.module('myapp', []);

angular.module('myapp')
    .component('app', {
        templateUrl: 'app.component.html',
        controller: function(MyService){
            this.onInputChange = function(){
                if(this.query.length > 3){
                    var promise = MyService.getRepos(this.query);
                    promise.then(function(res){
                        this.repos = res.data.items;
                    }.bind(this));
                }
            };
        }
    });
