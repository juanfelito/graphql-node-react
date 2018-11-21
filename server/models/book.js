var mongoose = require('mongoose');
var schema = mongoose.Schema;

var BookSchema = schema({
    name: String,
    genre: String,
    authorId: String
    // authorId: {type: schema.ObjectId, ref: 'Author'}
});

module.exports = mongoose.model('Book', BookSchema);