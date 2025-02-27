import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDark, setIsDark] = useState("light");

  const handleThemeToggle = (e) => {
    console.log(e.target.checked);

    if (e.target.checked) {
      console.log(e.target.checked);

      setIsDark("dark");
      localStorage.setItem("theme", "dark");

      // add custom data-theme attribute
      document.querySelector("html").setAttribute("data-theme", isDark);
    } else {
      setIsDark("light");
      localStorage.setItem("theme", "light");

      // add custom data-theme attribute
      document.querySelector("html").setAttribute("data-theme", isDark);
    }
  };

  useEffect(() => {
    const themeData = localStorage.getItem("theme");

    if (themeData) {
      document.querySelector("html").setAttribute("data-theme", themeData);
      if (themeData === "light") {
        document.querySelector("body").classList.remove("text-white");
        document.querySelector("body").classList.add("text-black");
      } else if (themeData === "dark") {
        document.querySelector("body").classList.remove("text-black");
        document.querySelector("body").classList.add("text-white");
      }
    } else {
      localStorage.setItem("theme", isDark);
    }
  }, [isDark]);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArt">All Art</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addArt">Add Art Item</NavLink>
          </li>
          <li>
            <NavLink to="/myArt">My Art List</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/contactus">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className=" flex items-center text-xl md:text-3xl font-platypi"
        >
          <span className="text-sky-600">Art&Craft</span>Gallery
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3 items-center">
            <div id="tooltip-1">
              <img
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100 "
                src={user?.photoURL}
              />
            </div>

            <button
              onClick={handleLogOut}
              className="btn bg-blue-950 text-white p-1 md:p-2"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <Link to="login" className="btn bg-blue-500 text-white p-1 md:p-2">
              Login
            </Link>
            <Link
              to="register"
              className="btn bg-pink-400 text-white p-1 md:p-2"
            >
              Register
            </Link>
          </>
        )}

        <label className="swap swap-rotate ml-2">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            onChange={handleThemeToggle}
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <Tooltip
        anchorSelect="#tooltip-1"
        content={user?.displayName}
        place="left"
      />
    </div>
  );
};

export default Navbar;
