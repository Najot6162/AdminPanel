const mongoose = require('mongoose')

const connectDb = async () => {
    const conn = await mongoose.connect('mongodb+srv://Creator:creator.6162@portfolio1.txxce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    // console.log(`MongoDb connected: ${conn.connection.host}`);
};
module.exports = connectDb;
