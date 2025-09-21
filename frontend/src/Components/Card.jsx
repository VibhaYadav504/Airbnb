import React from 'react'
const Card = ({title,landmark,image1,image2,image3,rent,city,id}) => {
  return (
    <div className='w-[330] max-w-[85%] h-[460px] flex items-start justify-start flex-col rounded-lg cursor-pointer '>
<div className='w-[100%] h-[67%] bg-[#2e2d2d] rounded-lg overflow-auto flex'>
  <img src={image1} alt=""  className='w-[100%] flex-shrink-0'/>
   <img src={image2} alt=""  className='w-[100%] flex-shrink-0'/>
    <img src={image3} alt=""  className='w-[100%] flex-shrink-0'/>
</div>
</div>
)}
export default Card;