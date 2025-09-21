import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ListingPage from './pages/ListingPage';
import ListingPage2 from  './pages/ListingPage2';
import ListingPage3 from  './pages/ListingPage3';
import { UserDataContext } from './Context/UserContext';
import { Navigate } from 'react-router-dom';


function App() {
  let {userData}=useContext(UserDataContext)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/listingpage' element={ userData !=null? <ListingPage />: <Navigate to={"/login"}/>} />
       <Route path='/listingpage2' element={ userData !=null? <ListingPage2 />: <Navigate to={"/login"}/>} />
         <Route path='/listingpage3' element={ userData !=null? <ListingPage3 />: <Navigate to={"/login"}/>} />
<Route path='*' element={<Navigate to='/'></Navigate>}/>
    </Routes>
  );
};

export default App;
