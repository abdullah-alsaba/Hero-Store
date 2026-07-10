// import React from 'react';
import { useEffect, useState } from "react";


const useAppsFetch = () => {

     const [apps, setApps] = useState([]);

     const [loading, setLoading] = useState(true);

     useEffect(() => {
       const fetchData = async () => {
         const res = await fetch("/data.json");
         const data = await res.json();
         setApps(data);
         setLoading(false);
       };

       fetchData();
     }, []);

    
    return {apps, loading};
};

export default useAppsFetch;