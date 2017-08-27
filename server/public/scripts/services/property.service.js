app.service('PropertyService', ['$http', function ($http) {
    console.log('Property service loaded.');

    var self = this;

    this.getSale = function () {
        $http.get('/properties').then(function (response) {
            console.log(response);
        });
    }
    
}])