app.service('PropertyService', ['$http', function ($http) {
    console.log('Property service loaded.');

    var self = this;

    this.getListings = function () {
        $http.get('/properties/listings').then(function (response) {
            console.log(response.data);
        });
    }
    this.getRentals = function () {
        $http.get('/properties/rentals').then(function (response) {
            console.log(response.data);
        });
    }
    
}])