const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RapperSchema = new Schema({
    rapperId: {
        type: String, 
        unique: true, 
        index: true
    },

    name: String,

    votes: {
        type: Number, 
        default: 0
    }
});

module.exports = mongoose.model('Rapper', rapperSchema);