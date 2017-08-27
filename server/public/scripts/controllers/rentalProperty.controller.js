app.controller('RentalProperty', ['PropertyService'], 
function(PropertyService){
    console.log('rental property controller loaded.');
    var self = this;

    PropertyService.getRental();
})