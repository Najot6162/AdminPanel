const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
     file: [{
        type : String,
        required: true
    }],
    text:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const galareyModel = mongoose.model('homePage', homeSchema)

module.exports = galareyModel