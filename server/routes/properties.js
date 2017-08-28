var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Listings = require('../models/listings.schema.js')
var Rentals = require('../models/rentals.schema.js')

//retrieve the sale properties
router.get('/listings',function(req,res){
    console.log('listings get route hit')
    Listings.find({}, function(err, data){
        if(err){
            console.log('error', err);
            res.sendStatus(500);
        }else{
            console.log('found data: ', data)
            res.send(data);
        }
    });

})


//retrieve the rental properties
router.get('/rentals',function(req,res){
    console.log('rentals get route hit')
    Rentals.find({}, function(err, data){
        if(err){
            console.log('error', err);
            res.sendStatus(500);
        }else{
            res.send(data);
        }
    });

})

module.exports = router;