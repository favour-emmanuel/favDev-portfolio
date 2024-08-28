import { useSelector } from "react-redux";
import { selectTheme } from "../Redux/slice/themeSlice";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className="w-full lg:px-12 px-5 py-5 border-t-0 ">
      <div
        className={`w-full border-t-[1.4px] ${
          theme?.theme === "Dark" ? "border-t-[#2323239b]" : ""
        }  lg:mx-5 mx-3 pt-5 flex flex-col lg:flex-row justify-between `}
      >
        <Link
          to="/"
          className="text-base lg:text-[22px] font-extrabold text-[#BBBCBD]"
        >
          fav.
          <span
            className={`${
              theme?.theme === "Dark" ? "text-[#ABFF74]" : "text-[#8FFFAE]"
            } `}
          >
            Dev
          </span>
        </Link>
        <div
          className={`flex gap-x-3 items-center ${
            theme?.theme === "Dark" ? "text-[#BBBCBD]" : "text-[#1B1E22]"
          }`}
        >
          <h3
            className={`border ${
              theme?.theme === "Light" ? "border-[#4d792f]" : ""
            } p-1.5 rounded-full hover:scale-[1.15] cursor-pointer`}
          >
            <Icon icon="simple-icons:github" />
          </h3>
          <h3
            className={`border ${
              theme?.theme === "Light" ? "border-[#4d792f]" : ""
            } p-1.5 rounded-full hover:scale-[1.15] cursor-pointer`}
          >
            <Icon icon="fa-brands:linkedin" />
          </h3>
          <h3
            className={`border ${
              theme?.theme === "Light" ? "border-[#4d792f]" : ""
            } p-1.5 rounded-full hover:scale-[1.15] cursor-pointer`}
          >
            <Icon icon="prime:twitter" />
          </h3>
          <h3
            className={`border ${
              theme?.theme === "Light" ? "border-[#4d792f]" : ""
            } p-1.5 rounded-full hover:scale-[1.15] cursor-pointer`}
          >
            <a href="mailto:iyenefavour@gmail.com" target="_blank">
              <Icon icon="fluent:mail-20-filled" />
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
