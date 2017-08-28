app.controller('Listings', ['PropertyService', function(PropertyService){
    console.log('listings controller loaded.');

    var self = this;

    PropertyService.getListings();
}]);