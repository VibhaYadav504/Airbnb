import React, { useContext } from 'react'
import { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { AuthDataContext } from '../Context/AuthContext.jsx';
import axios from 'axios';
import { UserDataContext } from '../Context/UserContext.jsx';
import Cookies from 'js-cookie';

const Login = () => {
    const [show,setShow]=useState(false)
    //const {serverUrl}=useContext(authDataContext)
    let {userData,setUserData}=useContext(UserDataContext)
    const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {serverUrl,loading,setLoading}=useContext(AuthDataContext);
      const navigate=useNavigate()
     {/* const handleLogin = async (e) => {
    e.preventDefault();        // Sabse pehle prevent default form submit
    setLoading(true);
    try {
      const result = await axios.post(serverUrl + "/api/auth/login", {
        email,
        password,
      });
      setUserData(result.data);
      navigate("/");
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);       // Hamesha loading false karna hai
    }
  };
*/}
const handleLogin=async (e)=>{
    setLoading(true)
        try{
            e.preventDefault()
    let result = await axios.post(serverUrl+"/api/auth/login",{
    
    email,
    password
    })
    setLoading(false)
    setUserData(result.data)
    Cookies.set('token', result.data.token, {
  expires: 7, // days
  secure: false, // true in production with HTTPS
  //sameSite: 'Lax', // or 'Strict' / 'None'
});
    console.log("result.data",result)
    navigate("/")
    console.log(result)
        } catch(error){
          setLoading(false)
        }
};
  return (
   <div className='w-[100vw] h-[100vh] flex items-center justify-center relative'>
     <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[1%] rounded-[50%] flex items-center justify-center' onClick={()=>navigate("/")}><FaArrowLeftLong className='w-[25px] h-[30px] text-[white]' /></div>
         <form action=
         ""
           className="max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col md:items-start gap-[10px]" onSubmit={handleLogin}
         >
           <h1 className='text-[30px] text-black'>Welcome to Airbnb</h1>
           <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
             <label htmlFor="email" className="block font-medium mb-1">Email</label>
             <input type="email" id="email" className="w-full px-4 py-2 border rounded" required onChange={(e)=>setEmail(e.target.value)} value={email} />
           </div>
   
           <div className="w-[90%] flex items-start justify-start flex-col gap-[10px] relative">
             <label htmlFor="password" className="block font-medium mb-1">Password</label>
             <input
               type={show ? "text" : "password"}
               id="password"
               className="w-full px-4 py-2 border rounded" required onChange={(e)=>setPassword(e.target.value)} value={password}
             />
             {!show && (
               <FaEye
                 className='w-[22px] h-[22px] absolute right-[1%] bottom-[12px] cursor-pointer'
                 onClick={() => setShow(prev => !prev)}
               />
             )}
             {show && (
               <FaEyeSlash
                 className='w-[22px] h-[22px] absolute right-[1%] bottom-[12px] cursor-pointer'
                 onClick={() => setShow(prev => !prev)}
               />
             )}
           </div>
   
           <button className='px-[50px] py-[10px] bg-red-500 text-white text-[18px] md:px-[100px] rounded-lg ' disabled={loading}>{loading?"Loading...":"Login"}
            
           </button>
           <p className='text-[18px]'>
            Create new account? <span className='text-[19px] text-red-500 cursor-pointer' onClick={()=>navigate("/SignUp")}>SignUp</span>
        </p>
         </form>
       </div>
  )
}

export default Login