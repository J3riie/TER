var express = require('express');
var app = express();
var dataRoutes = express.Router();

// Require Item model in our routes module
var Data = require('../models/Data');

// Defined store route
dataRoutes.route('/add').post(function (req, res) {
  var data = new Data(req.body);
   data.save()
    .then(item => {
    res.status(200).json({'data': 'Data added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
dataRoutes.route('/').get(function (req, res) {
   Data.find(function (err, datas){
    if(err){
      console.log(err);
    }
    else {
      res.json(datas);
    }
  });
});

// Defined edit route
dataRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Data.findById(id, function (err, data){
      res.json(data);
  });
});

//  Defined update route
dataRoutes.route('/update/:id').post(function (req, res) {
   Data.findById(req.params.id, function(err, data) {
    if (!data)
      return next(new Error('Could not load Document'));
    else {
      data.name = req.body.name;
      data.price = req.body.price;

      data.save().then(data => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
dataRoutes.route('/delete/:id').get(function (req, res) {
   Data.findByIdAndRemove({_id: req.params.id}, function(err, data){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = dataRoutes;