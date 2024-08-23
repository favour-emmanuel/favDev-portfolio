import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../constants";
import { selectTheme, setTheme } from "../Redux/slice/themeSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const location = useLocation();

  const changeTheme = () => {
    if (theme?.theme === "Dark") {
      dispatch(setTheme({ theme: "Light" }));

      localStorage.setItem("myapptheme", "Light");
    } else {
      dispatch(setTheme({ theme: "Dark" }));
      localStorage.setItem("myapptheme", "Dark");
    }
  };
  return (
    <nav className="lg:py-10 py-5 px-10">
      <header
        className={`${
          theme?.theme === "Light"
            ? "bg-appWhite text-[#1B1E22] border border-appGreen/35 "
            : "bg-appBlack text-[#BBBCBD] border border-white/80"
        }   py-4 lg:px-14 px-6 sticky top-0 z-50 backdrop-blur-md bg-opacity-45 rounded-full `}
      >
        <div className="flex justify-between items-center">
          <Link to="/" className="text-base lg:text-xl font-extrabold">
            fav.<span className="text-appGreen">Dev</span>
          </Link>
          <ul className="lg:flex hidden lg:gap-x-5 text-base sm:text-sm">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={
                    location.pathname === item.path ? "text-appGreen" : ""
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 cursor-pointer lg:text-xl text-lg">
            <span onClick={() => setNav(!nav)} className="lg:hidden flex">
              <Icon icon="hugeicons:menu-11" />
            </span>
            <button onClick={changeTheme}>
              {theme?.theme === "Light" ? (
                <span>
                  <Icon icon="ph:sun" />
                </span>
              ) : (
                <span>
                  <Icon icon="ri:moon-fill" />
                </span>
              )}
            </button>
            <button className="hidden lg:flex bg-linear-gradient text-sm text-[#323232] py-3 px-5 rounded-full hover:bg-transparent hover:border hover:border-appGreen hover:text-appGreen hover:ease-in-out hover:duration-300">
              Download Cv
            </button>
          </div>

          {/* mobile menu */}
          {nav ? (
            <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
          ) : (
            ""
          )}
          {/* side drawer menu */}
          <div
            className={
              nav
                ? `fixed left-0 top-0 w-full max-w-[25rem] md:max-w-[45rem] z-10 duration-300 p-5 ${
                    theme?.theme === "Light" ? "bg-appWhite" : "bg-appBlack"
                  } h-screen`
                : "fixed left-[-100%] top-0 min-h-[90vh] z-10 "
            }
          >
            <span
              onClick={() => setNav(!nav)}
              className="absolute right-4 top-4 cursor-pointer text-lg"
            >
              <Icon icon="line-md:menu-to-close-alt-transition" />
            </span>
            <Link to="/" className="text-xl font-extrabold">
              tech<span className="text-appGreen">Space</span>
            </Link>
            <ul className="flex flex-col gap-y-6 mt-8 text-sm sm:text-base">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={
                      location.pathname === item.path ? "text-appGreen" : ""
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <button className=" mt-5 bg-appGreen text-sm text-white py-2.5 px-3 rounded-md hover:bg-transparent hover:border hover:border-appGreen hover:text-appGreen hover:ease-in-out hover:duration-300">
                Create an account
              </button>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
