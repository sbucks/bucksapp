/**
 * Created by siva on 4/27/2017.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const revelSchema = Schema({
        "Type": String,
        "Name": String,
        "SKU": String,
        "Barcode": String,
        "Category": String,
        "Subcategory": String,
        "Quantity": Number,
        "Weight": Number,
        "Non-TaxableSales": Number,
        "TaxableSales": Number,
        "%TotalSales":String,
        "COGS": Number,
        "Date": Date,
        "FranchiseID": String

});

const Entry = module.exports = mongoose.model('Revel', revelSchema, 'revelsFull');
const Party = module.exports = mongoose.model('Revel', revelSchema, 'partyPackChallenge');

module.exports.getEntryByFranchiseID = function (date, fid, callback) {
  Entry.find({Date:date, FranchiseID:fid},callback);
};
module.exports.getPartyByDate = function (week, callback) {
  Party.find({
      ChallengeWeek: 2,
      $or: [{Name: /.*Party P.*/}, {Name: /.*party p.*/}]
  }, callback);
};

