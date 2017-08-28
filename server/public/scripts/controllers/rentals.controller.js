app.controller('RentalsController', ['PropertyService', function(PropertyService){
    console.log('rentals controller loaded.');

    var self = this;
    
    PropertyService.getRentals();
    self.rentals = PropertyService.rentals;
    console.log("rental controller log:", self.rentals);
}]);