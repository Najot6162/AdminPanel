const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
     file: [{
        type : String,
        required: true
    }],
    date: {
        type: Date,
        default: Date.now()
    }
})

const galareyModel = mongoose.model('galareys', photoSchema)

module.exports = galareyModel