const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
     link: {
        type : String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const linkModel = mongoose.model('linkModel', linkSchema)

module.exports = linkModel