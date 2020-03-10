const mongoose = require('mongoose');

const rolesValidos = {
    values: ['USER_ROLE','ADMIN_ROLE'],
    message: '{VALUE} is not a valid role.'
};

let Schema = mongoose.Schema;
let userSchema = new Schema({
    username:{
        type:String,
        required:[true,'the username field is required']
    },
    email:{
        type:String,
        unique:true,
        required:[true,'the email field is required']
    },
    password:{
        type:String,
        required:[true,'the password field is required']
    },
    avatar:{
        type:String,
        default:'NONE'
    },
    role:{
        type:String,
        default:'USER_ROLE',
        enum:rolesValidos
    },
    state:{
        type:Boolean,
        default:true
    }
});

userSchema.methods.toJSON = function (){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
};

module.exports = mongoose.model('User',userSchema);