const express = require('express')
const mongoose = require('mongoose');
const  { registerUser, login, getUserDetails, logout, updatePassword, updateProfile, getAllUser }  = require('../Controller/UserController');
const { isAuthenticateUser } = require('../Middleware/Auth');

const router = express.Router();


// router.post("/register" , registerUser )
router.route("/alluser").get(getAllUser)
router.route("/register").post(registerUser)
router.route("/login").post(login)
router.route("/me").get(isAuthenticateUser , getUserDetails);

router.route('/password/update').put(isAuthenticateUser , updatePassword)
router.route('/me/update').put(isAuthenticateUser , updateProfile)


// router.route("/logout").get(  isAuthenticateUser , logout);
router.route("/logout").post(   logout);

module.exports = router