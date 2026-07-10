import Logo from "../../../assets/logo.png";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-purple-200"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#7C4DFF] animate-spin"></div>

          <img
            src={Logo}
            alt="Logo"
            className="absolute inset-0 m-auto w-12 h-12"
          />
        </div>

        <h2 className="mt-8 text-2xl font-bold text-[#0A2342]">Loading...</h2>

        <p className="mt-2 text-gray-500">Preparing your experience</p>
      </div>
    </div>
  );
};

export default Loader;
