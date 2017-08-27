app.controller('SaleProperty', ['PropertyService', function(PropertyService){
    console.log('sale property controller loaded.');

    var self = this;

    PropertyService.getSale();
}]);