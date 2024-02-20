const express = require('express')
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser")
const router = require('./Routes/UserRoutes')
const bodyParser = require('body-parser');
const cors = require("cors");

const path = require('path')






const app = express()

app.use(cors({ origin: true, credentials: true }));

dotenv.config(); 

// connect to config -> config.env 

// dotenv.config({path:"backend/config/config.env"})


// static 
// app.use(express.static(path.join(__dirname, '../../frontend/build')))

// app.get('*' , function(req, res){
//     res.sendFile(path.join(__dirname , "../../frontend/build/index.html"))
// })  



// app.use()   Start   +++++++++++++++++++++

app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended:true
}));

// app.use()    End    ---------------------




const user = require('./Routes/UserRoutes')
const product = require('./Routes/ProductRoutes')
const order = require('./Routes/OrderRoutes')
// app.use()   Start   +++++++++++++++++++++

app.use('/api' , user );
app.use('/api' , product);
app.use('/api' , order)

// app.use()    End    ---------------------






app.use(`/`,(req,res, next)=>{
    console.log("Request was made");
    res.send("Request was made");
})




// this is server Start   +++++++++++++++++++++

mongoose.connect(process.env.DB_URI).then(()=>{
    console.log("Connected to MongoDB PORTT" , process.env.PORT);
}).then(()=>{
    // app.listen("4000")
    app.listen(process.env.PORT)
}).catch((error)=>{
    console.log(error)
})

// this is server End    ---------------------
