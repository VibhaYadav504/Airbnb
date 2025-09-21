import React, { createContext, useState } from 'react';

export const AuthDataContext = createContext();

const AuthDataProvider = ({ children }) => {
  const [serverUrl] = useState("http://localhost:8000"); // example value
  const [loading, setLoading] = useState(false);

  return (
    <AuthDataContext.Provider value={{ serverUrl,loading, setLoading }}>
      {children}
    </AuthDataContext.Provider>
  );
};

export { AuthDataProvider };
