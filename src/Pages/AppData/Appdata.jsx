// import React from 'react';
import Loader from "../../Components/Shared/Loader/Loader"

import { useParams } from "react-router";
import useAppsFetch from "../../Hooks/useAppsFetch";
import AppDataCard from "./AppDataCard/AppDataCard";

const Appdata = () => {

    const { appid } = useParams();
    

    const { apps, loading} = useAppsFetch();
   

    const expectedApp = apps.find((app) => app.id == appid);

  if (loading) {
    return <Loader></Loader>;
  }

    

    return (
        <div>
            
         <AppDataCard expectedApp={expectedApp} key={expectedApp.id}></AppDataCard>
        </div>
    );
};

export default Appdata;