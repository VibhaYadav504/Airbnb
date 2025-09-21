import React, { useContext } from 'react'
import Card from '../Components/Card.jsx';
import Nav from "../Components/Nav.jsx";
import {ListingDataContext } from '../Context/ListingContext.jsx';


const Home = () => {
  let {listingData,setListingData}=useContext(ListingDataContext)
  return (
    <div >
      <Nav/>
<div className='w-[100vw] h-[77vh] flex items-center justify-center gap-[25px] flex-wrap mt-[250px] md:mt-[180px]'>
  {listingData.map((list)=>(
    <Card title={list.title} landmark={list.landmark} city={list.city} image1={list.image1} image={list.image2} image3={list.image3} rent={list.rent} id={list._id}/>
    
  ))}

</div>
    </div>
  )
}

export default Home