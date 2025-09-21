import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthDataProvider } from './Context/AuthContext.jsx'; //  Named export
import { UserDataProvider } from './Context/UserContext';
import ListingContext from './Context/ListingContext';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthDataProvider>
        <UserDataProvider>
          <ListingContext>
            <App />
          </ListingContext>
        </UserDataProvider>
      </AuthDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
