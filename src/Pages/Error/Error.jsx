import { Link } from "react-router";
import error404 from "../../assets/error-404.png";

const Error = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6">
      <div className="text-center">
        {/* 404 Image */}
        <img
          src={error404}
          alt="404 Illustration"
          className="w-107.5 max-w-full mx-auto mb-10"
        />

        {/* Heading */}
        <h1 className="text-[56px] font-bold leading-tight text-[#0A2342]">
          Oops, page not found!
        </h1>

        {/* Description */}
        <p className="mt-4 text-xl text-[#6B7280]">
          The page you are looking for is not available.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center mt-8 h-12 px-10 rounded-md bg-[#7C4DFF] hover:bg-[#6B42E8] text-white font-semibold transition"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default Error;
