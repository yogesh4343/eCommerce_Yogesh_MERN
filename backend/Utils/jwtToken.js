function Token( existingUser , status , res , token) {
    console.log(`token is ====` , token)

   
    const options = {
        expires : new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly :true,
    }

    res.status(status).cookie("token" , token , options).json({
        success: true,
        existingUser,
        token,
        message:"You are logged in",
    })
}


module.exports = Token;