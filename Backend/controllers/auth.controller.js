import genToken from "../config/token.js"
import User from "../model/user.model.js"
import bcrypt from "bcryptjs"
export const signUp=async(req,res)=>{
    try{
const {name,email,password}=req.body
const existUser=await User.findOne({email})
if(existUser){
    return res.status(400).json({message:"User is already exist"})
}
const hashPassword=await bcrypt.hash(password,10)
const newUser=await User.create({name,email,password:hashPassword})
const token =  genToken(newUser._id);
 res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENVIRONMENT==="production",
   // maxAge:7*24*60*60*1000,

})
return res.status(201).json(newUser)

    }catch(error){
        return res.status(500).json({message:`signup error ${error.message}`})

    }
};
// login 
export const login=async(req,res)=>{
    try{
const {email,password}=req.body
const existingUser=await User.findOne({email})
if(!existingUser){
    return res.status(400).json({message:"User is not exist"})
}
const isMatch=await bcrypt.compare(password,existingUser.password)
if(!isMatch){
    return res.status(400).json({message:"incorrect Password"})
}

const token =  genToken(existingUser._id);
// res.cookie("token",token,{
//     httpOnly:true,
//     secure:process.env.NODE_ENVIRONMENT==="production",
    
//    // maxAge:7*24*60*60*1000,

// })
console.log("token",token);
//existingUser.token =token;
return res.status(200).json({existingUser,token})

    }catch(error){
        return res.status(500).json({message:`login error ${error.message}`})

    }}
    //logout
    export const logOut=async(req,res)=>{
        try{
res.clearCookie("token")
return res.status(200).json({message:"LogOut successfully"})

        }catch(error){
            return res.status(500).json({message:`logout error ${error.message}`})

        }
    }