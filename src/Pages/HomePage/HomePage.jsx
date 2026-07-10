// import React from 'react';

import Hero from "../../Components/Hero/Hero";
import StatusCard from "../../Components/StatusCard/StatusCard";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <StatusCard></StatusCard>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default HomePage;