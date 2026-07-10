import { Link } from "react-router";
import NotFoundPage from "../../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#FAFAFA] px-6">
      <div className="text-center">
        {/* Image */}
        <img
          src={NotFoundPage}
          alt="App Not Found"
          className="w-105 max-w-full mx-auto"
        />

        {/* Heading */}
        <h1 className="mt-8 text-[56px] leading-none font-bold text-[#0A2342] uppercase">
          Oops!! App Not Found
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-175 mx-auto text-[22px] leading-8 text-[#7B8794]">
          The app you are requesting is not found on our system. Please try
          another app.
        </p>

        {/* Button */}
        <Link
          to="/apps"
          className="inline-flex mt-10 h-12 items-center justify-center
          rounded-md bg-linear-to-r
          from-[#7C3AED] to-[#A855F7]
          px-10 text-white font-semibold
          shadow-lg shadow-purple-500/20
          transition-all duration-300
          hover:scale-105"
        >
          Go Back!
        </Link>
      </div>
    </section>
  );
};

export default AppNotFound;
