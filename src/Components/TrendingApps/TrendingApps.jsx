import { Link } from "react-router";
import { useEffect, useState } from "react";
import AppCard from "../Ui/Apps/AppCard";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setApps(data);
    };

    fetchData();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[52px] font-bold text-[#0A2342]">Trending Apps</h2>

        <p className="mt-3 text-lg text-[#7A7A7A]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
        {apps.slice(0, 8).map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-14">
        <Link
          to="/apps"
          className="inline-flex h-12 items-center justify-center rounded-lg
             bg-linear-to-r from-[#7C3AED] to-[#A855F7]
             px-8 text-white font-medium
             shadow-lg shadow-purple-500/20
             transition-all duration-300
             hover:scale-[1.03] hover:shadow-purple-500/30"
        >
          Show All
        </Link>
      </div>
    </section>
  );
};

export default TrendingApps;
