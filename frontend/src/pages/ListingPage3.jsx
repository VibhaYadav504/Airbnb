import React, { useContext } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ListingDataContext } from '../Context/ListingContext';

function ListingPage3() {
  const navigate = useNavigate();

  const {
    title, setTitle,
    description, setDescription,
    frontEndImage1, setFrontEndImage1,
    frontEndImage2, setFrontEndImage2,
    frontEndImage3, setFrontEndImage3,
    backEndImage1, setBackEndImage1,
    backEndImage2, setBackEndImage2,
    backEndImage3, setBackEndImage3,
    rent, setRent,
    city, setCity,
    landmark, setLandmark,
    category, setCategory,
    handleAddListing,
    adding, setAdding
  } = useContext(ListingDataContext);

  return (
    <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center gap-[10px] flex-col overflow-auto relative'>

      {/* Back Button */}
      <div
        className='w-[50px] h-[50px] bg-red-600 cursor-pointer absolute top-[5%] left-[20px] rounded-full flex items-center justify-center'
        onClick={() => navigate("/listingpage2")}
      >
        <FaArrowLeft className='w-[25px] h-[25px] text-white' />
      </div>

      {/* Location Header */}
      <div className='w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]'>
        <h1 className='text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden'>
          {`In ${(landmark || "").toUpperCase()}, ${(city || "").toUpperCase()}`}
        </h1>
      </div>

      {/* Images and Content Box */}
      <div className='w-[95%] h-auto flex flex-col md:flex-row items-center justify-center md:w-[80%] bg-black gap-2 pb-4'>

        {/* Main Image */}
        <div className='w-full h-[200px] md:w-[70%] md:h-[400px] overflow-hidden flex items-center justify-center border-[2px] border-white bg-red-400'>
          <img src={frontEndImage1 || "/placeholder.jpg"} alt="Front Image 1" className='w-full object-cover h-full' />
        </div>

        {/* Side Images */}
        <div className='w-full h-[200px] md:w-[30%] md:h-[400px] flex flex-row md:flex-col gap-2'>
          <div className='w-1/2 md:w-full h-full overflow-hidden flex items-center justify-center border-[2px] border-white'>
            <img src={frontEndImage2 || "/placeholder.jpg"} alt="Front Image 2" className='w-full object-cover h-full' />
          </div>
          <div className='w-1/2 md:w-full h-full overflow-hidden flex items-center justify-center border-[2px] border-white'>
            <img src={frontEndImage3 || "/placeholder.jpg"} alt="Front Image 3" className='w-full object-cover h-full' />
          </div>
        </div>

      </div>

      {/* Title */}
      <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px] mt-4'>
        {(title || "").toUpperCase()} {(category || "").toUpperCase()}, {(landmark || "").toUpperCase()}
      </div>

      {/* Description */}
      <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px] text-gray-800'>
        {(description || "").toUpperCase()}
      </div>

      {/* Rent */}
      <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]'>
        {`Rs. ${(rent || "").toUpperCase()}`}
      </div>

      {/* Add Listing Button */}
      <div className='w-[95%] h-[50px] flex items-center justify-start px-[20px] md:px-[110px]'>
        <button
          className='px-[50px] py-[10px] bg-red-600 text-white text-[18px] md:px-[100px] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed'
          onClick={handleAddListing}
          disabled={adding}
        >
          {adding ? "Adding..." : "Add Listing"}
        </button>
      </div>

    </div>
  );
}

export default ListingPage3;
