const express = require('express')
const mongoose = require('mongoose');
const CatchAsyncError = require('../Middleware/CatchAsyncError');
const User = require('../Models/UserModels');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');
const Token = require('../Utils/jwtToken');
const UserModels = require('../Models/UserModels');

dotenv.config({path:"backend/config/config.env"})

// function add User     start  +++++++++++++++++++++

exports.registerUser  =  CatchAsyncError(async(req, res , next) =>{
    
    let existingUser;
    const {name , email , password} = req.body;

    existingUser = await User.findOne({email: email});

    if(existingUser){
        return  res.status(500).json({  status:false, message:"User Alreay Exist" })  
    }

    // hashpassword 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = bcrypt.hashSync(password , salt)

    existingUser = await User.create({
        name : name,
        email : email,
        password :hashPassword,
        avatar:{
                public_id:"12",
                url:"https://www.pngmart.com/files/10/User-Account-Person-PNG-File.png"
        }
    })

     //  jwtSign  +++++++++++++++++++++
     const token = jwt.sign({id:existingUser._id} , process.env.JWT_SECRET , {
        expiresIn : "5d"
    })
        // -----------------------

    existingUser.save();
    // res.status(200).json({status:true , existingUser , message:`User Registered`})
    return Token(existingUser , 200 , res , token )
})

 // End    ---------------------





// login       start  +++++++++++++++++++++

    exports.login = CatchAsyncError( async(req,res,next)=>{
        const {email , password} = req.body;
        let existingUser
         existingUser = await User.findOne({email:email}).select("+password")           //+password bcz we ar using (select=false) in Schema


         if(!existingUser){
            return res.status(500).json({status:false , message:"Emial not foud" })
         }

        //  jwtSign  +++++++++++++++++++++
        const token = jwt.sign({id:existingUser._id} , process.env.JWT_SECRET , {
            expiresIn : "5d"
        })
            // -----------------------

        //  hashpassword 
        const isPassword = bcrypt.compareSync(password , existingUser.password)

         if(!isPassword){
             return res.status(500).json({status:false  , message:"Please Emter Correct Email & pass" })
        }
        else{
            // return res.status(200).json({status:true , existingUser , message:"You are logged in"})
            // return res.status(200).json({status:true , existingUser ,  token , message:"You are logged in"})
            // return res.status(200).json({status:true , existingUser ,  token , message:"You are logged in"})
                return Token(existingUser , 200 , res , token )
            }

    })

//  End    ---------------------





// getUserDetails       start  +++++++++++++++++++++

exports.getUserDetails = CatchAsyncError( async(req, res, next)=>{
    let existingUser;
    existingUser = await User.findById(req.existingUserByAuth.id)    // mean jo hum login honge tb hmne (auth) m req.existingUser m cont pass kiya usse  (user.id) ye get kiya === humne (auth) means authenticate se ye id pass ki h vo hmae yaha use kia h
    if(!existingUser){
        return res.status(500).json({status:false  , message:"Eml not foud" })
    }
    return res.status(200).json({status:true , existingUser , message:"User logged in - user fetch"})
})

//  End    ---------------------






// getUserDetails       start  +++++++++++++++++++++

exports.getAllUser = CatchAsyncError(async(req, res, next)=>{
    let existingUser;
    existingUser = await User.find()

    if(!existingUser){
        return res.status(500).json({ success:false , message:"User Not Fund" })
    }
    return res.status(200).json({ success:true , existingUser , message:"User Fund" })


})

//  End    ---------------------





    // logout       start  +++++++++++++++++++++

exports.logout = CatchAsyncError( async(req, res, next)=>{

    res.cookie("token" , null ,{
        expires: new Date(Date.now()),
        httpOnly : true
    })

    res.status(200).json({
        status:true,
        message:"User Logout succcess"
    })
    
})

    //   End    ---------------------





    // update password  start  +++++++++++++++++++++

    exports.updatePassword = CatchAsyncError(async (req,res,next) => {

        let {password, newPassword , confirmPassword} = req.body;
        let existingUser;
        existingUser = await User.findById(req.existingUserByAuth.id).select('+password');


        // let hashPassword 
        // const salt = await bcrypt.genSalt(10)
        // hashPassword = bcrypt.hashSync(password , salt)

        const isPasswordMatched = bcrypt.compareSync(password,existingUser.password)
        if (!isPasswordMatched) {
            return res.status(500).json({success:false , message:"original Password is incorrect"})
        }


        if(newPassword !== confirmPassword){ 
            return res.status(500).json({ success:false , message:"ConfirmPassword is incorrect" })
        }

        const salt = await bcrypt.genSalt(10)
        let  newHashPassword = bcrypt.hashSync(newPassword, salt)

        existingUser.password = newHashPassword
        existingUser.save();

        return res.status(200).json({ success:true , message:"newPassword & ConfirmPassword matched" })



    })

    // End    ---------------------
    
    



    // updateProfile     start ++++++++++

    exports.updateProfile = CatchAsyncError(async(req,res,next)=>{
        // const {name,email} = req.body;
        const newUserData = {
            name: req.body.name,
            email: req.body.email,
        }
    
        // newUser = {name,email}

        let existingUser;
        existingUser = await User.findByIdAndUpdate(req.existingUserByAuth.id, newUserData, {
            new : true,
            runValidators : true,
            useFindAndModify : false
        });

        if(!existingUser){
            return res.status(500).json({ success:false , message:"User Not Fund" })
        }

        return res.status(201).json({ success:true ,existingUser, message:"User Update successful" })


    })

    // End    ---------------------
