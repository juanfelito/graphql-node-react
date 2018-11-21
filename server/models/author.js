var mongoose = require('mongoose');
var schema = mongoose.Schema;

var AuthorSchema = schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Author', AuthorSchema);