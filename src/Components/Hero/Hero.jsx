import HeroImg from "../../assets/hero.png";
import { FaAppStoreIos } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 pt-24">
        {/* Text */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-[64px] leading-18 font-bold text-[#0B2341]">
            We Build
            <br />
            <span className="bg-linear-to-r from-[#7B61FF] to-[#9F67FF] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>

          <p className="mt-8 max-w-180 mx-auto text-[18px] leading-8 text-[#6B7280]">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="btn h-14 px-8 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-none text-[#111827] font-medium">
              <img
                width="26"
                height="26"
                src="https://img.icons8.com/fluency/48/google-play-store-new.png"
                alt="google-play-store-new"
              />
              Google Play
            </button>

            <button className="btn h-14 px-8 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-none text-[#111827] font-medium">
              <FaAppStoreIos className="text-2xl text-[#0A84FF]" />
              App Store
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-16 flex justify-center">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full max-w-155 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
