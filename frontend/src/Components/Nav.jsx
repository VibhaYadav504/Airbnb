import { useState } from 'react'
import React, { useContext } from "react";

import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBed } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeadvisor } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildings } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { AuthDataContext } from "../Context/AuthContext.jsx";
import axios from 'axios';
import { UserDataContext } from '../Context/UserContext.jsx';


const Nav = () => {
  let [showpopup, setShowpopup] = useState(false);
  let { userData, setUserData } = useContext(UserDataContext);
  let navigate = useNavigate();
  let { serverUrl } = useContext(AuthDataContext);

  const handleLogOut = async () => {
    try {
      let result = await axios.post(serverUrl + "/api/auth/logout", );
      setUserData(null);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='w-[100vw] min-h-[80px] border-b-[1px] border-[#dcdcdc] px-[20px] flex items-center justify-between md:px-[40px]'>
        <div>
          <img src="./a.png" alt="" className='w-[130px]' />
        </div>

        <div className='w-[35%] relative hidden md:block'>
          <input type="text" className='w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdaba] outline-none overflow-auto rounded-[30px] text-[17px]' placeholder='Any Where | Any Location | Any City' />
          <button className='absolute p-[10px] rounded-[50px] bg-[red] right-[3%] top-[5px]'>
            <CiSearch className='w-[20px] h-[20px] text-[white]' />
          </button>
        </div>

        <div className='flex items-center justify-center gap-[10px] relative'>
          <span className='text-[18px] cursor-pointer rounded-[30px] hover:bg-[#ded9d9] px-[8px] py-[5px] hidden md:block' onClick={() => navigate("/listingpage")}>
            List your home
          </span>
          <button className='px-[20px] py-[10px] flex items-center justify-center gap-[5px] border-[1px] border-[#8d8c8c] rounded-[50px] hover:shadow-lg' onClick={() => setShowpopup(prev => !prev)}>
            <span><GiHamburgerMenu className='w-[20px] h-[20px]' /></span>
            {userData == null && <span><CgProfile className='w-[23px] h-[23px]' /></span>}
            {userData != null && (
              <span className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center'>
                {userData.existingUser?.name.slice(0, 1)}
              </span>
            )}
          </button>

          {showpopup && (
            <div className='w-[220px] h-[250px] absolute bg-slate-50 top-[110%] right-[3%] border-[1px] border-[#aaa9a9] z-10 rounded-lg md:right-[10%]'>
              <ul className='w-[100%] h-[100%] text-[17px] flex items-start justify-around flex-col py-[10px]'>
                <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'
                  onClick={() => {
                    navigate("/login");
                    setShowpopup(false);
                  }}>
                  Login
                </li>
                <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'
                  onClick={() => {
                    handleLogOut();
                    setShowpopup(false);
                  }}>
                  LogOut
                </li>
                <div className='w-[100%] h-[1px] bg-[#c1c0c0]'></div>
                <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'
                  onClick={() => {
                    navigate("/listingpage");
                    setShowpopup(false);
                  }}>
                  List Your Home
                </li>
                <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>My Listing</li>
                <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>Check Booking</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className='w-[100%] h-[60px] flex items-center justify-center block md:hidden'>
        <div className='w-[85%] relative'>
          <input type="text" className='w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdaba] outline-none overflow-auto rounded-[30px] text-[17px]' placeholder='Any Where | Any Location | Any City' />
          <button className='absolute p-[10px] rounded-[50px] bg-[red] right-[3%] top-[5px]'>
            <CiSearch className='w-[20px] h-[20px] text-[white]' />
          </button>
        </div>
      </div>

      <div className='w-[100%] h-[85px] bg-white flex items-center justify-start cursor-pointer gap-[40px] overflow-auto md:justify-center px-[15px]'>
        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
          <MdOutlineWhatshot className='w-[30px] h-[30px] text-black' />
          <h3>Trending</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
          <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
          <h3>Villa</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
          <MdBed className='w-[30px] h-[30px] text-black' />
          <h3>Form House</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
          <MdOutlinePool className='w-[30px] h-[30px] text-black' />
          <h3>Pool House</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
          <GiWoodCabin className='w-[30px] h-[30px] text-black' />
          <h3>Rooms</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
          <SiHomeadvisor className='w-[30px] h-[30px] text-black' />
          <h3>Flat</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
          <IoBedOutline className='w-[30px] h-[30px] text-black' />
          <h3>PG</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap'>
          <FaTreeCity className='w-[30px] h-[30px] text-black' />
          <h3>Cabins</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
          <BiBuildings className='w-[30px] h-[30px] text-black' />
          <h3>Shops</h3>
        </div>
      </div>
    </>
  );
};

export default Nav;
