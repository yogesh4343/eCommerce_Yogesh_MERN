const CatchAsyncError = require("../Middleware/CatchAsyncError");
const Order = require("../Models/OrderModels");

// createOrder 
exports.createOrder = CatchAsyncError(async(req,res,next)=>{
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      } = req.body;
    
    let order;

    order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.existingUserByAuth.id
    })

    res.status(201).json({ success: true, order, message:"Order Created" });
})



// getSingleOrder
exports.getSingleOrder = CatchAsyncError(async(req,res,next)=>{
    let order;
    order = await Order.findById(req.params.id);
    if(!order){
        res.status(500).json({ success: false, message:"No orde Product" });
    }
    res.status(201).json({ success: true, order, message:"Single Product" });
})


// all order 
exports.getAllOrder = CatchAsyncError(async(req,res,next)=>{
    let allOrder = await Order.countDocuments()
    let order;
    order = await Order.find();
    if(!order){
        res.status(500).json({ success: false, message:"No orde Product" });
    }
    res.status(201).json({ success: true, order, allOrder , message:"Product" });
})


// login user myOrders
exports.myOrders = CatchAsyncError(async(req,res,next)=>{
    console.log("hel",req.existingUserByAuth._id)
    let order;
    order = await Order.find({user :req.existingUserByAuth._id});

    if(!order){
        res.status(500).json({ success: false, message:"No Login User Order Product" });
    }
    res.status(201).json({ success: true, order, message:"Login Order Product" });

})






// update order reh rha h








// updateOrder 
exports.deleteOrder = CatchAsyncError(async(req,res,next)=>{
    let order;
    order = await Order.findOneAndDelete(req.params.id)

    if(!order){
        res.status(500).json({ success: false, message:"No Order" });
    }
    res.status(201).json({ success: true , message:"Order delete" });

})