const mongoose = require('mongoose');

const playListSchema = mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    author : {
        type: String,
        type : String,
        required: true
    },
    music: [{
        type: String,  
        type : String,
        required: true
    }],
    image: [{
        type : String,
        type : String,
        required: true
    }],
    text: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const playListModel = mongoose.model('playLists', playListSchema)

module.exports = playListModel