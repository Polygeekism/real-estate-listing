app.controller('ListingsController', ['PropertyService', function(PropertyService){
    console.log('listings controller loaded.');

    var self = this;
    PropertyService.getListings();
    self.listings = PropertyService.listings;
    console.log(self.listings);
}]);