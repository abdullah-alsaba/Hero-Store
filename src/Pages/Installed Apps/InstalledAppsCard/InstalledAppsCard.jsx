import { useContext } from "react";
import Download from "../../../assets/icon-downloads.png";
import Rating from "../../../assets/icon-ratings.png";
import { InstalledAppsContext } from "../../../Context/InstalledAppsContextProvider/InstalledAppsContextProvider";

const InstalledAppsCard = ({ installedApp }) => {
    const { image, title, downloads, ratingAvg, size } = installedApp;

      const {install , setInstall
        }= useContext(InstalledAppsContext)

   
    
    const handelUninstallButton = (id) => {
        const unInstallApp = install.filter((app) => app.id !== id);
        setInstall(unInstallApp)
        
    }

  return (
    <div className="bg-white rounded-md px-5 py-4 flex items-center justify-between shadow-sm border border-gray-100 mb-4">
      {/* Left Side */}
      <div className="flex items-center gap-5">
        {/* App Image */}
        <figure className="w-20 h-20 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </figure>

        {/* App Info */}
        <div>
          <h2 className="text-[20px] font-semibold text-[#0A2342]">{title}</h2>

          <div className="flex items-center gap-5 mt-2">
            {/* Downloads */}
            <div className="flex items-center gap-1">
              <img src={Download} alt="" className="w-4 h-4" />
              <span className="text-[#10C972] text-[18px]">{downloads}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <img src={Rating} alt="" className="w-4 h-4" />
              <span className="text-[#FF8A00] text-[18px]">{ratingAvg}</span>
            </div>

            {/* Size */}
            <span className="text-[#6B7280] text-[18px]">{size} MB</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <button className="bg-[#08D693] hover:bg-[#06c583] transition text-white font-semibold px-7 py-3 rounded-md" onClick={()=>{handelUninstallButton(installedApp.id)}}>
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppsCard;
