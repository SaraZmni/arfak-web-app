import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaInstagram, FaTwitter } from "react-icons/fa6";

const Navbar: FC = () => {
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-blue-200 text-white">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          Design <span className="text-orange-400">DK</span>
        </a>

        {/* navitems for website */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-blue-950" key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden ">
          <a href="/" className="hover:text-orange-500">
            <FaInstagram />
          </a>
          <a href="/" className="hover:text-orange-500 gap-4 items-center">
            <FaTwitter />
          </a>
          <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Log in
          </button>
        </div>

        {/* mobile menu btn, display mobile screen */}
        <div className="md:hidden">
          <button className="cursor-pointer">
            <FaBars className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
