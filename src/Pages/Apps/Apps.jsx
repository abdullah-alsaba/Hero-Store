// import React from 'react';
import { useEffect, useState } from "react";
import Loader from "../../Components/Shared/Loader/Loader.jsx";
import AppCard from "../../Components/Ui/Apps/AppCard.jsx";
import { CiSearch } from "react-icons/ci";

const Apps = () => {
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

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center">
        <h2 className="text-[52px] font-bold text-[#0A2342]">
          Our All Applications
        </h2>

        <p className="mt-3 text-lg text-[#7A7A7A]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="mt-4 flex justify-between">
        <h2 className="font-bold text-xl">({apps.length}) Apps Found</h2>
        <div className="flex items-center gap-2 border border-gray-300 rounded-2xl" >
          <CiSearch />
        <input type="text" name="text" id="text" placeholder="Search Apps" />
        </div>
      </div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
