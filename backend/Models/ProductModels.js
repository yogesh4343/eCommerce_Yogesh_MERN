const mongoose = require('mongoose')

const productModel = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please Enter product Description"]
    },
    price:{
        type:Number,
        required:[true, "Please Enter product Price"],
        // maxLength:[10, "Price cannot exceed 8 characters"]
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
    //     {
    //     public_id:{
    //         type:String,
    //         // required:true
    //     },
    //     url:{
            // type:String,
    //         // required:true
    //     }
    // }
    ],
    category:{
        type:String,
        required:[true , "Plaese Enter Product Category"]
    },
    brand:{
        type:String,
        required:[true , "Plaese Enter Product brand"]
    },
    model:{
        type:String,
        required:[true , "Plaese Enter Product model"]
    },
    feature:{
        type:Boolean,
        required:[true , "Plaese Enter feature Category"]
    },
    newArrivals:{
        type:Boolean,
        required:[true , "Plaese Enter newArrivals"]
    },
    colors:[],
    Stock:{
        type:Number,
        required:[true , "Please Enter product Stock"],
        // maxLength:[4, "Stock Cannot Exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required: true
        
            },
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required: true

    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product' , productModel)




// sabse pehlr m category dunga phir props k though m brand dunga phir model dunga , 3no ko pai m use kr lenge 

// phle m category use kru phir usko api m use kru phir brand lu usko api m use kru phir model lu teeno ko api m use kru 