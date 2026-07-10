/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../Context/InstalledAppsContextProvider/InstalledAppsContextProvider';
import InstalledAppsCard from './InstalledAppsCard/InstalledAppsCard';
import NoInstalledApps from './NoInstalledApps/NoInstalledApps';

const InstalledApps = () => {
     const {install , setInstall
    }= useContext(InstalledAppsContext)

    const noData = install.length === 0; 
    return (
      <>
        {noData ? (
          <NoInstalledApps></NoInstalledApps>
        ) : (
          <div className='max-w-7xl mx-auto px-8'>
            <div className="text-center">
              <h2 className="text-[52px] font-bold text-[#0A2342]">
                Your Installed Apps
              </h2>

              <p className="mt-3 text-lg text-[#7A7A7A]">
                Explore All Trending Apps on the Market developed by us
              </p>
                        </div>
                        <div>
                            <h1 className='font-bold mt-4 mb-6'>{ install.length} Apps Found</h1>
                        </div>
            {install.map((installedApp, ind) => (
              <InstalledAppsCard
                installedApp={installedApp}
                key={ind}
              ></InstalledAppsCard>
            ))}
          </div>
        )}
      </>
    );
};

export default InstalledApps;