var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var DataCodePostal = new Schema({
  CodeP: {
    type: Number
  },
  PrixDep: {
    type: Number
  },
  PrixReg: {
    type: Number
  }
},{
    collection: 'datasCodePostal'
});

module.exports = mongoose.model('DataCodePostal', DataCodePostal);