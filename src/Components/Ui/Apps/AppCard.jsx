import Download from "../../../assets/icon-downloads.png";
import { Link } from "react-router";

import Rating from "../../../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="bg-white border border-[#ECECEC] rounded-lg p-4 hover:shadow-lg transition duration-300"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden rounded-md bg-[#F3F3F3]">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-[20px] font-semibold text-[#0A2342] line-clamp-2 min-h-14">
        {app.title}
      </h3>

      {/* Footer */}
      <div className="flex justify-between mt-5">
        <div className="flex items-center gap-2 bg-[#F3FFF5] text-[#34C759] px-3 py-1 rounded text-sm font-medium">
          <img src={Download} alt="" className="w-4 h-4" />
          {app.downloads}
        </div>

        <div className="flex items-center gap-2 bg-[#FFF3E9] text-[#FF9800] px-3 py-1 rounded text-sm font-medium">
          <img src={Rating} alt="" className="w-4 h-4" />
          {app.ratingAvg}
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
