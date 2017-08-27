app.service('PropertyService', ['$http', function ($http) {
    console.log('Property service loaded.');

    var self = this;

    this.getSale = function () {
        $http.get('/properties/sale').then(function (response) {
            console.log(response.data);
        });
    }
    this.getRental = function () {
        $http.get('/properties/rental').then(function (response) {
            console.log(response.data);
        });
    }
    
}])