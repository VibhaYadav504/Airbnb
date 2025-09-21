import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthDataContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export const ListingDataContext = createContext();

function ListingContext({ children }) {
  let navigate=useNavigate()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frontEndImage1, setFrontEndImage1] = useState(null);
  const [frontEndImage2, setFrontEndImage2] = useState(null);
  const [frontEndImage3, setFrontEndImage3] = useState(null);
  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);
  const [rent, setRent] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [category, setCategory] = useState("");
const [adding,setAdding]=useState(false)
const [listingData,setListingData]=useState([])

  const { serverUrl } = useContext(AuthDataContext);

  const handleAddListing = async () => {
    setAdding(true)
    try {
      let formData = new FormData();
      formData.append("title", title);
      formData.append("image1", backEndImage1);
      formData.append("image2", backEndImage2);
      formData.append("image3", backEndImage3);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landmark", landmark);
      formData.append("category", category);

      let result = await axios.post(
        `${serverUrl}/api/listing/add`,
        formData);
setAdding(false)
      console.log(result);
      navigate("/")
setTitle("")
setDescription("")
setFrontEndImage1(null)
setFrontEndImage1(null)
setFrontEndImage1(null)
setBackEndImage1(null)
setBackEndImage1(null)
setBackEndImage2(null)
setBackEndImage3(null)
setRent("")
setCity("")
setLandmark("")
setCategory("")


    } catch (error) {
      setAdding(false)
      console.log(error);
    }
  };
  const getListing=async ()=>{
    try{
      let result=await axios.get(serverUrl+"/api/listing/get")
      setListingData(result.data)
    }catch(error){

      console.log(error)
    }
    
  }
  useEffect(()=>{
    getListing()
  },[])

  const value = {
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
    setAdding,adding,
    listingData,setListingData,
    getListing
  };

  return (
    <ListingDataContext.Provider value={value}>
      {children}
    </ListingDataContext.Provider>
  );
}

export default ListingContext;
