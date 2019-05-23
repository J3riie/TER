var express = require('express');
var app = express();
var dataBienImmoRoutes = express.Router();

// Require Item model in our routes module
var DataBienImmo = require('../models/DataBienImmo');

// Defined get data(index or listing) route
dataBienImmoRoutes.route('/').get(function (req, res) {
   DataBienImmo.find(function (err, datasBienImmo){
    if(err){
      console.log(err);
    }
    else {
      res.json(datasBienImmo);
    }
  });
});

module.exports = dataBienImmoRoutes;