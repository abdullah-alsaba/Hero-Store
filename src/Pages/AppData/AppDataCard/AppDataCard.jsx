import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

import Download from "../../../assets/icon-downloads.png";
import Reviews from "../../../assets/icon-review.png";
import Ratings from "../../../assets/icon-ratings.png";
import { useContext } from "react";
import { InstalledAppsContext } from "../../../Context/InstalledAppsContextProvider/InstalledAppsContextProvider";
import { toast } from "react-toastify";

const AppDataCard = ({ expectedApp }) => {
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings,
  } = expectedApp;

  const {install , setInstall
}= useContext(InstalledAppsContext)

  const existedApps =install.some((app)=>app.id===expectedApp.id)

  const handelInstall=() => {
    if (existedApps) {
      toast.error(`${title} is already installed`);
      return
    } else {
      setInstall([...install, expectedApp]);
      toast.success(`${title} is successfully installed`)

  }
    
  }

  // Show 5 star at the top
  const chartData = [...ratings].reverse();

  const formatNumber = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(0)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num;
  };

  return (
    <div className="bg-[#f5f5f5] py-10">
      <div className="max-w-7xl mx-auto bg-white shadow-sm">
        {/* ================= Header ================= */}

        <div className="px-12 py-10">
          <div className="flex gap-8">
            {/* App Image */}

            <figure className="w-62.5 h-62.5 border border-gray-200 flex justify-center items-center bg-white">
              <img
                src={image}
                alt={title}
                className="w-42.5 h-42.5 object-contain"
              />
            </figure>

            {/* Right Side */}

            <div className="flex-1">
              <div className="border-b border-gray-300 pb-5">
                <h1 className="text-5xl font-bold text-[#16233b]">{title}</h1>

                <p className="text-xl text-gray-500 mt-3">
                  Developed by{" "}
                  <span className="text-purple-600 font-medium">
                    {companyName}
                  </span>
                </p>
              </div>

              {/* Stats */}

              <div className="flex gap-20 mt-8">
                <div>
                  <img src={Download} alt="" className="w-8 mb-2" />
                  <p className="text-gray-500">Downloads</p>
                  <h2 className="text-4xl font-bold">{downloads}</h2>
                </div>

                <div>
                  <img src={Ratings} alt="" className="w-8 mb-2" />
                  <p className="text-gray-500">Average Ratings</p>
                  <h2 className="text-4xl font-bold">{ratingAvg}</h2>
                </div>

                <div>
                  <img src={Reviews} alt="" className="w-8 mb-2" />
                  <p className="text-gray-500">Total Reviews</p>
                  <h2 className="text-4xl font-bold">{reviews}</h2>
                </div>
              </div>

              {/* Install */}

              <button className="mt-8 bg-[#08D693] hover:bg-[#07c182] transition text-white text-xl font-semibold px-8 py-3 rounded" onClick={()=>{handelInstall()}}>
                Install Now ({size} MB)
              </button>
            </div>
          </div>

          {/* Divider */}

          <div className="border-b border-gray-300 my-10"></div>

          {/* ================= Ratings ================= */}

          <h2 className="text-4xl font-semibold text-[#16233b] mb-8">
            Ratings
          </h2>

          <div className="h-85">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 20,
                  left: 10,
                  bottom: 5,
                }}
              >
                <XAxis
                  type="number"
                  tickFormatter={formatNumber}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#666", fontSize: 14 }}
                />

                <YAxis
                  dataKey="name"
                  type="category"
                  width={65}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#666", fontSize: 15 }}
                />

                <Bar dataKey="count" radius={[0, 5, 5, 0]} barSize={24}>
                  {chartData.map((item, index) => (
                    <Cell key={index} fill="#ff8500" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Divider */}

          <div className="border-b border-gray-300 my-10"></div>

          {/* ================= Description ================= */}

          <h2 className="text-4xl font-semibold text-[#16233b] mb-8">
            Description
          </h2>

          <p className="text-gray-600 text-lg leading-9 whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDataCard;
