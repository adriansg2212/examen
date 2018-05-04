const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const schema = Schema({
    nombre: String,
    password: String,
    salt: String
});

schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Usuario', schema);