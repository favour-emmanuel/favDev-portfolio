import { useSelector } from "react-redux";
import { selectTheme } from "../Redux/slice/themeSlice";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className="w-full lg:px-16 px-5 py-5 border-t-0 ">
      <div
        className={`w-full border-t-[1.4px] ${
          theme?.theme === "Dark"
            ? "border-t-[#2323239b] text-[#BBBCBD]"
            : "border-t-[#649d923f]"
        }  lg:mx-5 mx-3 pt-5 lg:pt-8 flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 justify-between mt-7 `}
      >
        <div>
          <Link
            to="/"
            className="text-[15px] lg:[16.5px] font-extrabold flex items-center"
          >
            <Icon icon="ic:outline-less-than" />
            fav.<span className="text-appGreen">Dev</span>
            <Icon icon="radix-icons:slash" />
            <Icon
              icon="ic:sharp-greater-than"
              className="ml-[-6px] text-[#67be80] font-bold"
            />
          </Link>
          <p
            className={`${
              theme?.theme === "Dark" ? "text-[#BBBCBD]" : ""
            } text-[12.48px] lg:text-sm`}
          >
            &copy; 2024 Favour Emmanuel
          </p>
        </div>
        <div
          className={`flex gap-3 items-center ${
            theme?.theme === "Dark" ? "text-[#BBBCBD]" : "text-[#1B1E22]"
          }`}
        >
          <h3
            className={`border ${
              theme?.theme === "Light" ? "border-[#8fc0b789]" : ""
            } p-1.5 rounded-full hover:scale-[1.15] cursor-pointer`}
          >
            <a
              href="https://github.com/favour-emmanuel"
              target="_blank"
              className="text-lg"
            >
              <Icon icon="simple-icons:github" />
            </a>
          </h3>
          <h3
            className={`border ${
              theme?.theme === "Light" ? "border-[#8fc0b789]" : ""
            } p-1.5 rounded-full hover:scale-[1.15] cursor-pointer`}
          >
            <a
              href="https://www.linkedin.com/in/favour-emma/"
              target="_blank"
              className="text-lg"
            >
              <Icon icon="fa-brands:linkedin" />
            </a>
          </h3>
          <h3
            className={`border ${
              theme?.theme === "Light" ? "border-[#8fc0b789]" : ""
            } p-1.5 rounded-full hover:scale-[1.15] cursor-pointer`}
          >
            <a
              href="https://x.com/divine_emeralds"
              target="_blank"
              className="text-lg"
            >
              <Icon icon="prime:twitter" />
            </a>
          </h3>
          <h3
            className={`border ${
              theme?.theme === "Light" ? "border-[#8fc0b789]" : ""
            } p-1.5 rounded-full hover:scale-[1.15] cursor-pointer`}
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=iyenefavour@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="fluent:mail-20-filled" />
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
