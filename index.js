//import express
const express = require('express')

//import cors
const cors = require('cors')

//import logic file
const logic = require('./service/logic')

//server creation
const server = express()

//convert incoming json type data to js
server.use(express.json())


//connect front end
server.use(cors({origin:'http://localhost:4200'}))

// set port 
server.listen(3000,()=>{
    console.log("_______Server Started at port 3000________");
})


//register - post
server.post('/register',(req,res)=>{
    logic.register(req.body.acno,req.body.uname,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result)         //json() - method in js to convert data from js to json and send the result as response
    })
})



//login - post
server.post('/login',(req,res)=>{
    logic.login(req.body.acno,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result)  
    })
})





//view profile - get
//balance check - get
//transfer - post
//transaction history - get
//delete account - delete



// // //server api resolve
// server.get('/getexc',(req,res)=>{
//     res.send("....get request...")
// })

// server.get('/getexc2',(req,res)=>{
//     res.send("....get request 2...")
// })