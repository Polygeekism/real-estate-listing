app.service('PropertyService', ['$http', function ($http) {
    console.log('Property service loaded.');

    var self = this;
    self.listings = { list: [] };
    self.rentals = {list:[]};

    self.getListings = function () {
        $http.get('/properties/listings').then(function (response) {
            
            self.listings.list = response.data;
            console.log(self.listings);
        });
    }
    self.getRentals = function () {
        $http.get('/properties/rentals').then(function (response) {
            
            self.rentals.list = response.data;
            console.log('rentals in service:' , self.rentals);
        });
    }
    
}])