const mongoose = require('mongoose');

const uri = `mongodb://localhost:27017/mailman`
const options = {useNewParser:true}
const db = mongoose.connect(uri, options);

module.exports = db;