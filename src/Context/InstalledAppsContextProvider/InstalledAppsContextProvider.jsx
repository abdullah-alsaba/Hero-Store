import React, { createContext } from 'react';


const InstalledAppsContext = createContext()

const InstalledAppsContextProvider = () => {
    const data= {"it's working"}
    return (
        <InstalledAppsContext.Provider value={data}></InstalledAppsContext.Provider>
    );
};

export default InstalledAppsContextProvider;