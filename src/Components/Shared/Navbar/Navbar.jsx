import { FaGithub } from "react-icons/fa";
import { NavLink, Link } from "react-router";
import Logo from "../../../assets/logo.png";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-[#6C4CF1] font-semibold border-b-[3px] border-[#6C4CF1] pb-2"
      : "text-[#4B5563] hover:text-[#6C4CF1] border-b-[3px] border-transparent pb-2 transition";

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto h-20 px-6 lg:px-10">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-xl bg-white shadow-lg z-50"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/apps">Apps</NavLink>
              </li>

              <li>
                <NavLink to="/installedapps">Installation</NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-10 w-10" />
            <h2 className="text-xl font-bold tracking-wide text-[#4F46E5]">
              HERO.IO
            </h2>
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-10 text-[15px]">
            <li>
              <NavLink className={navClass} to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className={navClass} to="/apps">
                Apps
              </NavLink>
            </li>

            <li>
              <NavLink className={navClass} to="/installedapps">
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <button className="btn h-11 px-6 bg-[#6C4CF1] hover:bg-[#5B3FE4] border-none text-white rounded-md shadow-none">
            <FaGithub className="text-lg" />
            Contribute
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
