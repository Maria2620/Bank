//import model
const db = require('./db')

//Register logic
register = (acno,uname,psw)=>{
    // db.User.findOne({acno:acn})
    return db.User.findOne({acno}).then(user=>{
        if(user){
            return {
                message:"User already present",
                status:false,
                statusCode:404
            }
        }
        else{
            newuser = new db.User({
                acno:acno,
                uname:uname,
                psw:psw,
                balance:0,
                transaction:[]
            })
// to reflect the changes done by server in database
            newuser.save()
            return {
                message:"Registered successfully",
                status:true,
                statusCode:200
            }


        }
    })

}

//Login logic
login = (acno,psw)=>{
   return  db.User.findOne({acno,psw}).then(user=>{
        if(user){
            return {
                message:"Login success",
                status:true,
                statusCode:200
            }
        }
        else{
            return {
                message:"Incorrect acno or password",
                status:false,
                statusCode:404
            } 
        }
    })
}



//export
module.exports={
    register,login
}