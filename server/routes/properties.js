var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    console.log('get route hit')
    res.sendStatus(200);
})

module.exports = router;