var express = require('express');
var router = express.Router();
var SaleProperty = require('../models/saleProperty.schema.js')
var RentalProperty = require('../models/rentalProperty.schema.js')

//retrieve the sale properties
router.get('/sale',function(req,res){
    console.log('sale get route hit')
    SaleProperty.find({}), function(err, data){
        if(err){
            console.log('error', err);
            res.sendStatus(500);
        }else{
            console.log('found data: ', data)
            res.send(data);
        }
    }

})

//retrieve the rental properties
router.get('/rental',function(req,res){
    console.log('rental get route hit')
    RentalProperty.find({}), function(err, data){
        if(err){
            console.log('error', err);
            res.sendStatus(500);
        }else{
            res.send(data);
        }
    }

})

module.exports = router;