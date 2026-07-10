// import React from 'react';
import Loader from "../../Components/Shared/Loader/Loader"

import { useParams } from "react-router";
import useAppsFetch from "../../Hooks/useAppsFetch";
import AppDataCard from "./AppDataCard/AppDataCard";
import AppNotFound from "../AppNotFound/AppNotFound";

const Appdata = () => {

    const { appid } = useParams();
    

    const { apps, loading} = useAppsFetch();
   
    
      if (loading) {
        return <Loader></Loader>;
      }

  const expectedApp = apps.find((app) => app.id == appid);
  
  if (!expectedApp) {
   return <AppNotFound></AppNotFound>
  }

    

    return (
        <div>
            
         <AppDataCard expectedApp={expectedApp} key={expectedApp.id}></AppDataCard>
        </div>
    );
};

export default Appdata;