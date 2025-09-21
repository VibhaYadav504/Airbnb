import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from 'axios';
import { useContext } from 'react';
import { AuthDataContext } from '../Context/AuthContext.jsx';
import { UserDataContext } from '../Context/UserContext.jsx';



const SignUp = () => {
  const [show, setShow] = useState(false);
  const navigate=useNavigate()
  const {serverUrl}=useContext(AuthDataContext)
  let {userData,setUserData}=useContext(UserDataContext)
  const [name,setName]=useState("")
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState("")
  const {loading,setLoading}=useContext(AuthDataContext);

  {/*const handleSignup = async (e) => {
    e.preventDefault();          // <-- Prevent form submit first
    setLoading(true);            // <-- Then set loading true
    try {
      const result = await axios.post(serverUrl + "/api/auth/signup", {
        name,
        email,
        password
      });
      setUserData(result.data);
      navigate("/");
      console.log(result, "Signup successful");
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false);          // <-- Always turn off loading
    }
  };*/}
  const handleSignup=async (e)=>{
    setLoading(true)
    try{
      console.log("shivam")
        e.preventDefault();
let result = await axios.post(serverUrl+"/api/auth/signup",{
name,
email,
password
})
setLoading(false)
setUserData(result.data)
navigate("/")
console.log(result,"kuch vhi")
    } catch(error){
        console.log(error)
        
    }
  };
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center relative'>
        <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[1%] rounded-[50%] flex items-center justify-center' onClick={()=>navigate("/")}><FaArrowLeftLong className='w-[25px] h-[30px] text-[white]' /></div>
      <form
        className="max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col md:items-start gap-[10px]" onSubmit={handleSignup}
      >
        <h1 className='text-[30px] text-black'>Welcome to Airbnb</h1>

        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]">
          <label htmlFor="name" className="block font-medium mb-1">Username</label>
          <input type="text" id="name" className="w-full px-4 py-2 border rounded" required onChange={(e)=>setName(e.target.value)} value={name}/>
        </div>

        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 border rounded" required onChange={(e)=>setEmail(e.target.value)} value={email} />
        </div>

        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px] relative">
          <label htmlFor="password" className="block font-medium mb-1">Password</label>
          <input
            type={show ? "text" : "password"}
            id="password"
            className="w-full px-4 py-2 border rounded"required onChange={(e)=>setPassword(e.target.value)} value={password}
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

        <button className='px-[50px] py-[10px] bg-red-500 text-white text-[18px] md:px-[100px] rounded-lg mt-[20px] ' disabled={loading}>
          {loading?"Loading...":"Signup"}
          
        </button>
        <p className='text-[18px]'>
            Already have a account? <span className='text=[19px] text-[red] cursor-pointer' onClick={()=>navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
