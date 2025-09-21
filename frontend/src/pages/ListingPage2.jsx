import React, { useContext } from 'react'
import { ListingDataContext } from '../Context/ListingContext';
import { FaArrowLeft } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { SiHomeassistant } from "react-icons/si";
import { GiWoodCabin } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { MdOutlinePool } from "react-icons/md";
const ListingPage2 = () => {
    let navigate = useNavigate();
    let { category, setCategory } = useContext(ListingDataContext)

    return (
    <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center relative flex-col overflow-auto '>

      {/* Back Button */}
      <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={() => navigate("/listingpage")}>
        <FaArrowLeft className='w-[25px] h-[25px] text-[white]' />
      </div>

      {/* Header Button */}
      <div className='w-[200px] h-[50px] text-[20px] bg-[#f14242] text-[white] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg'>
        Set Your Category
      </div>

      <div className='max-w-[900px] w-[100%] h-[550px] overflow-auto bg-white flex items-center justify-start flex-col gap-[40px] mt-[30px] '></div>

      <h1 className='text-[18px]  text-[black] md:text-[30px] px-[10px]'>Which of these best describes your place</h1>

      {/*  This is the flex container with boxes inside now */}
      <div className='max-w-[900px] w-[100%] h-[100%] flex flex-wrap items-center justify-center gap-[15px] md:w-[70%] '>
        <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category== "villa" ? "border-3 [ #8b8b8b]":""}`} onClick={()=>setCategory("Villa")}>
          <GiFamilyHouse className='w-[30px] h-[30px] text-[black]' />
          <h3>Villa</h3>
        </div>

        <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category=="Form House" ? "border-3 [#8b8b8b]":""}`}onClick={()=>setCategory("Form House")}>
          <FaTreeCity  className='w-[30px] h-[30px] text-[black]' />
          <h3>Form House</h3>
        </div>

        <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category=="Pool House" ? "border-3 [#8b8b8b]":""}`} onClick={()=>setCategory("Pool House")}>
          <MdOutlinePool  className='w-[30px] h-[30px] text-[black]' />
          <h3>Pool House</h3>
        </div>

        <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category== "Rooms" ? "border-3 [ #8b8b8b]":""}`}onClick={()=>setCategory("Rooms")}>
          <GiFamilyHouse className='w-[30px] h-[30px] text-[black]' />
          <h3>Rooms</h3>
        </div>

        <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category== "Flat" ? "border-3 [ #8b8b8b]":""}`}onClick={()=>setCategory("Flat")}>
          <GiFamilyHouse className='w-[30px] h-[30px] text-[black]' />
          <h3>Flat</h3>
        </div>

        <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category== "PG" ? "border-3 [ #8b8b8b]":""}`}onClick={()=>setCategory("PG")}>
          <IoBedOutline  className='w-[30px] h-[30px] text-[black]' />
          <h3>PG</h3>
        </div>

        <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category== "Cabin" ? "border-3 [ #8b8b8b]":""}`}onClick={()=>setCategory("Cobin")}>
          <GiWoodCabin  className='w-[30px] h-[30px] text-[black]' />
          <h3>Cabin</h3>
        </div>

        <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg ${category== "Shops" ? "border-3 [ #8b8b8b]":""}`}onClick={()=>setCategory("shops")}>
          <SiHomeassistant  className='w-[30px] h-[30px] text-[black]' />
          <h3>Shops</h3>
        </div>
      </div>
<button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg absolute right-[5%] bottom-[5%] ' onClick={()=>navigate("/listingpage3")} disabled={!category}>Next</button>

    </div >
  )
}

export default ListingPage2;