app.controller('Rentals', ['PropertyService', function(PropertyService){
    console.log('rentals controller loaded.');

    var self = this;

    PropertyService.getRentals();
}]);