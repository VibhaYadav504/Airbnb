// import jwt from "jsonwebtoken"
//  const genToken=async(userId)=>{

//     try{
//         let token=await jwt.sign({userId},process.env.JWT_SECRET,
//             {expiresIn:"7d"})
//             return token 
//     }catch(error){
//         console.log("token error")
    
//     }

//  }
//  export default genToken
import jwt from "jsonwebtoken";

const genToken = (userId) => {
  try {
    const token = jwt.sign(
      { userId },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return token;
  } catch (error) {
    console.error("Token generation error:", error.message);
    return null;
  }
};

export default genToken;
