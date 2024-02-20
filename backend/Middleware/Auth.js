const jwt = require('jsonwebtoken');
const UserModels = require('../Models/UserModels');
const CatchAsyncError = require('./CatchAsyncError');

exports.isAuthenticateUser = CatchAsyncError(async (req, res, next)=>{

    const {token} = req.cookies;
    // console.log(token);


    if(!token){
        return res.status(400).json({status:false  , message:"Tokn not found" })
    }

    // verifyToken 
    const decodedData = jwt.verify(token , process.env.JWT_SECRET);
    // console.log("decodedData" , decodedData)
    req.existingUserByAuth = await UserModels.findById(decodedData.id);

    
    next()
})




// authorize role 
exports.authorizeRole = (...roles) => {    // ye jo roles h vo userRoutes m authorizeRole m (admin) pass kiya h vo h ...roles 
    return (req, res, next)=> {
        if(!roles.includes(req.existingUserByAuth.role)){
            return next(  new ErrorHandler(`Role : ${req.existingUserByAuth.role} is not allowed to access this resource` , 403) )
        }
        next();
    }

}
