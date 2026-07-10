import { Link } from "react-router";
import { MdOutlineApps } from "react-icons/md";

const NoInstalledApps = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center bg-white border border-gray-100 rounded-2xl shadow-lg p-10">
        {/* Icon */}
        <div className="w-24 h-24 mx-auto rounded-full bg-linear-to-r from-[#7C3AED] to-[#A855F7] flex items-center justify-center">
          <MdOutlineApps className="text-5xl text-white" />
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-bold text-[#0A2342]">
          No Installed Apps
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-500 leading-7">
          It looks like you haven't installed any apps yet. Browse our
          collection and discover amazing apps built by HERO.IO.
        </p>

        {/* Button */}
        <Link
          to="/apps"
          className="inline-flex mt-8 h-12 items-center justify-center rounded-lg
          bg-linear-to-r from-[#7C3AED] to-[#A855F7]
          px-8 text-white font-medium shadow-lg shadow-purple-500/20
          hover:scale-105 transition-all duration-300"
        >
          Explore Apps
        </Link>
      </div>
    </section>
  );
};

export default NoInstalledApps;
