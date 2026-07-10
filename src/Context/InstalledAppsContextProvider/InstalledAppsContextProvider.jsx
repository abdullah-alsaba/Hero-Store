/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';


export const InstalledAppsContext = createContext()

const InstalledAppsContextProvider = ({ children }) => {
  const [install, setInstall] = useState([]) 
  
  

    const data = {
     install , setInstall
    }
    
    return (
      <InstalledAppsContext.Provider value={data}>
        {children}
      </InstalledAppsContext.Provider>
    );
};

export default InstalledAppsContextProvider;