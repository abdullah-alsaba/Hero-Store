import { Link } from "react-router";
import Logo from "../../../assets/logo.png";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#07182D] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-12 h-12" />

            <h2 className="text-[28px] font-bold tracking-tight text-[#5B4CF7]">
              HERO.IO
            </h2>
          </Link>

          {/* Social */}
          <div className="text-center md:text-right">
            <h3 className="uppercase text-sm tracking-[3px] text-gray-400 mb-5">
              Social Links
            </h3>

            <div className="flex justify-center md:justify-end gap-6 text-2xl">
              <a className="hover:text-[#5B4CF7] transition">
                <FaXTwitter />
              </a>

              <a className="hover:text-[#5B4CF7] transition">
                <FaLinkedinIn />
              </a>

              <a className="hover:text-[#5B4CF7] transition">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10"></div>

        {/* Bottom */}
        <p className="text-center text-[15px] text-gray-400">
          Copyright ©2025 HERO.IO. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
