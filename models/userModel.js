const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {expect} = require('chai')



const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique:[true,`Bu username allaqachon ro'yxatdan o'tgan!!!.`],
        required: [true, `Iltimos username ni kiriting!.`]
    },
    email:{
        type:String,
        unique:[true, `Bu pochta allaqachon ro'yxatdan o'tgan!!!.`],
        required:[true, `Iltimos pochtangizni ni kiriting!.`]
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        enum: ['admin', 'menejer'],
        default: 'menejer'
       },
    date: {
        type: Date,
        default: Date.now()
    }
})
    
userSchema.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

userSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password));
};


const userModel = mongoose.model('users',userSchema)

module.exports = userModel