const express = require('express')
const CatchAsyncError = require('../Middleware/CatchAsyncError')
const Product = require('../Models/ProductModels')
const ApiFeatures = require('../Utils/apifeatures')



// create prod 

exports.createProduct = CatchAsyncError(async(req,res,next)=>{

    // product k user Schema m jo user ki id h usme user ki id deke k liye ye use kena
    req.body.user = req.existingUserByAuth.id
    // console.log(req.existingUserByAuth)         // isse hmae schema k user m id di h

    let product;
    product = await Product.create(req.body);
    if(!product){
        return res.status(401).json({message:'Failed to create new product'})
    }
    res.status(201).json({status:true , product , message:"Product Created"});

})





// get prod 

exports.getAllProducts = CatchAsyncError( async (req,res,next )=>{
    const productsCount = await Product.countDocuments()
    // const product = await Product.find()
    let resultPerPage = 50;
    const apiFeature = new ApiFeatures(Product.find() , req.query).search().filter().pagination(resultPerPage)

    let product;
    product =  await apiFeature.query; 
    if(!product){
        return res.status(500).json({status:false , message:'No products found'})
    }
    return res.status(200).json({status:true, product, productsCount,  resultPerPage, message:'product'})
})





// get single product 

exports.getSingleProduct = CatchAsyncError(async(req, res, next)=>{
    let product;
    product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({status:false , message:'No single  products found'})
    }
    return res.status(200).json({status:true, product, message:' single product'})
})






// update Product 
exports.updateProduct = CatchAsyncError(async(req, res, next)=>{
    let product;
    product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({status:false , message:'No products found for update'})
    }
    product = await Product.findByIdAndUpdate(req.params.id , req.body, {
        new:true,
        runValidators:true,
        userFindAndModify:false})

     return res.status(200).json({status:true , product ,  message:'prod update'})

})



// delete Product 
exports.deleteProduct = CatchAsyncError( async(req, res, next)=>{
    let product;
    product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({status:false , message:'No products found for delete'})
    }
    product = await Product.findByIdAndDelete(req.params.id)

    return res.status(200).json({status:true  ,  message:'prod delete'})
})




// getAllReview
exports.getAllReview = CatchAsyncError(async(req,res,next)=>{
    let product;
     product = await Product.findById(req.query.id)
     if(!product){
        return res.status(500).json({status:false , message:'No review fond'})}

        const review = product.reviews
        return res.status(200).json({status:true  , review,  message:'prod gets'})
})






// update review 
exports.updateReview = CatchAsyncError(async (req,res,next)=>{
    const {comment, rating , productId} = req.body;

    const review={
        user:req.existingUserByAuth._id,
        name:req.existingUserByAuth.name,
        rating:rating,
        comment:comment
    }

    let product;
    product  = await Product.findById(productId)

    const isReviewed = product.reviews.find((rev)=> rev.user.toString() === req.existingUserByAuth._id.toString())

    console.log(" ")
    // console.log("rev" , product.reviews)

    if(isReviewed){


        product.reviews.map((ele,ind)=>{
            if(ele.user.toString() === req.existingUserByAuth._id.toString()){
                ele.rating = rating,
                ele.comment = comment
            }
        })

    }else{
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length
    }


    let avg = 0;

    product.reviews.forEach((curEl, ind)=>{
        avg +=  curEl.rating
    })

    // console.log(Number(avg));


    product.ratings = avg/product.reviews.length


    await product.save({validateBeforeSave: false})





    return res.status(200).json({status:true , review,  message:"add and update review"})
})






// delete review 

exports.deleteReview = CatchAsyncError(async(req,res,next)=>{
    let product;
        product = await Product.findById(req.query.id)         // ye product i id ha 
        // const isReviewed = product.reviews.find((rev)=> rev.user.toString() === req.existingUserByAuth._id.toString());

        // if(isReviewed){


        //     product.reviews.filter((ele,ind)=>{
        //         return ele.user.toString() !== req.existingUserByAuth._id.toString()
        //     })
    
        // }

        const reviews = product.reviews.filter(
            (rev) => rev.user.toString() !== req.existingUserByAuth._id.toString()
          );
        


    let avg = 0;

    product.reviews.forEach((curEl, ind)=>{
        avg +=  curEl.rating
    })

    // console.log(Number(avg));


    product.ratings = avg/product.reviews.length


    await product.save({validateBeforeSave: false})


const review = product.reviews


    return res.status(200).json({status:true , review,  message:"review delete"})

})