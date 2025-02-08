import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate("");
  const [showMenu, setMenu] = useState(false);
  const [token, setToken] = useState(true);

  const logOut=()=>{
    setToken(false);
    navigate("/login");
  }

  return (
    <div className="flex  items-center justify-between text-sm py-4 mb-5 border-b border-gray-400 relative">
      <h3
        onClick={() => navigate("/")}
        className="font-bold text-2xl cursor-pointer bg-gradient-to-r from-teal-800 to-emerald-500 bg-clip-text text-transparent"
      >
        DocBooking
      </h3>

      {/* Desktop Menu */}
      <ul className="hidden md:flex  items-center gap-10 font-medium text-base">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-500"
                : "text-gray-700 hover:text-green-400 duration-150"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive
                ? "text-green-500"
                : "text-gray-700 hover:text-green-400 duration-150"
            }
          >
            All Doctors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-500"
                : "text-gray-700  hover:text-green-400 duration-150"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 "
                : "text-gray-700  hover:text-green-400 duration-150"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Profile Section */}
      <div className="flex items-center">
        {token ? (
          <div className="flex items-center cursor-pointer gap-2 group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="profile picture"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  className="hover:text-black"
                  onClick={() => navigate("my-profile")}
                >
                  My Profile
                </p>
                <p
                  className="hover:text-black"
                  onClick={() => navigate("my-appoinments")}
                >
                  My Appoinments
                </p>
                <p className="hover:text-black" onClick={() => logOut()}>
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-400  text-white rounded-2xl hover:bg-blue-600"
          >
            Create account
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col text-xl"
        onClick={() => setMenu(!showMenu)}
      >
        <CiMenuFries />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } md:hidden absolute top-full left-0 w-full bg-white flex-col items-center gap-4 py-4 shadow-md`}
      >
        <NavLink
          to="/"
          onClick={() => setMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-green-500"
                : "text-gray-700  hover:text-green-400 duration-150"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/doctors"
          onClick={() => setMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-green-500"
                : "text-gray-700  hover:text-green-400 duration-150"
          }
        >
          ALL DOCTORS
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-green-500"
                : "text-gray-700  hover:text-green-400 duration-150"
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contacts"
          onClick={() => setMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-green-500"
                : "text-gray-700  hover:text-green-400 duration-150"
          }
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
