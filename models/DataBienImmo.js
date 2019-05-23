var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var DataBienImmo = new Schema({
  typeB: {
    type: String
  },
  taille: {
    type: Number
  },
  NbCh: {
  	type: Number
  },
  SuCh: {
  	type: Number
  },
  SuCu: {
  	type: Number
  },
  SuSe: {
  	type: Number
  },
  SuWc: {
  	type: Number
  },
  Prix: {
  	type: Number
  },
  NbP: {
  	type: Number
  },
  NbS: {
  	type: Number
  },
  EdB: {
  	type: Number
  },
  EdC: {
  	type: Number
  },
  EdM: {
  	type: Number
  },
  EEP: {
  	type: Number
  },
  EI: {
  	type: Number
  },
  Lum: {
  	type: Number
  },
  Son: {
  	type: Number
  },
  Pop: {
  	type: Number
  },
  ProxTrans: {
  	type: Number
  },
  ProxEcole: {
  	type: Number
  },
  ProxCom: {
  	type: Number
  },
  Orient: {
  	type: String
  },
  EauUsee: {
  	type: Boolean
  },
  Mitoyen: {
  	type: Boolean
  },
  Fibre: {
  	type: Boolean
  },
  Piscine: {
  	type: Boolean
  },
  Jardin: {
  	type: Boolean
  },
  Ascenseur: {
  	type: Boolean
  },
  Parking: {
  	type: Boolean
  },
  Veranda: {
  	type: Boolean
  },
  Balcon: {
  	type: Boolean
  },
  Terrasse: {
  	type: Boolean
  },
  Terrain: {
  	type: Boolean
  },
  Cave: {
  	type: Boolean
  },
  Grenier: {
  	type: Boolean
  }
},{
    collection: 'datasBienImmo'
});

module.exports = mongoose.model('DataBienImmo', DataBienImmo);