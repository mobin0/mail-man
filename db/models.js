var mongoose = require('mongoose');
var db = require('./connection.js');
mongoose.Promise = global.Promise;

const mailmanSchema = new mongoose.Schema({
  id : Number,
  username: String,
  url: String,
  type: String,
  data: String
},
  {
    timestamps: true
  }
);


const MailMan = mongoose.model('MailMan', mailmanSchema);
module.exports = MailMan;