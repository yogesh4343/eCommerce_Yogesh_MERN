const mongoose = require('mongoose');
const validator = require('validator')


const UserModels = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Your Name"],
        // maxLength:[30 , "name cannot exceed 30 char"],
        // minLength:[4 , "name more then 5 char"]
    },
    email:{
        type:String,
        required:[true, "Please Enter Your Email"],
        unique:true,
        validate: [validator.isEmail , "Please Enter Your Email" ]
    },
    password:{
        type:String,
        required:[true, "Please Enter Your Password"],
        // minLength:[8 , "password should be then 8 char"],
        select: false
    },
    avatar:{
        public_id:{
            type:String,
            // required:true
        },
        url:{
            type:String,
            // required:true
        }
},
    role:{
        type:String,
        default:'user'
    },
    createdAt:{
        type: Date,
        default:Date.now()
    },
})


module.exports = mongoose.model("User", UserModels)




// token 