import { useSelector } from "react-redux";
import { selectTheme } from "../Redux/slice/themeSlice";
import heroImgDark from "/dp-img-dark.png";
import heroImg from "/dp-img.png";

const Hero = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className="flex md:flex-row flex-col justify-between w-full lg:px-14 px-5 py-10">
      <div
        className={`w-full max-w-[37rem] ${
          theme?.theme === "Light" ? "text-appBlack" : "text-appWhite"
        }`}
      >
        <p className="text-sm lg:text-[15px] mb-1.5 font-semibold tracking-wider">
          Hi, I'm Favour Emma
        </p>
        <h1 className="font-extrabold lg:text-[3.55rem] text-5xl my-2 tracking-wide lg:leading-[3.9rem]">
          I'm a{" "}
          <span
            className={`${
              theme?.theme === "Dark"
                ? "bg-gradient-to-r from-[#8FFFAE] to-[#ABFF74] bg-clip-text text-transparent"
                : "text-[#7bdc96]"
            } `}
          >
            {" "}
            front-end{" "}
          </span>
          Expert Developer
        </h1>
        <p className="font-light text-sm lg:text-base my-4 leading-6 tracking-wide w-full lg:max-w-[29.8rem]">
          I am front-end web developer, I turn design concepts(UI) into
          seemless, visually appealing and user-friendly interfaces.
        </p>
        <button className="bg-[#7bdc96] w-full max-w-[9rem] py-3 my-1.5 text-appBlack lg:text-[15px] text-[13px] font-semibold rounded-lg">
          My Project
        </button>
      </div>

      <div className="lg:max-w-[25rem] max-w-[24rem] mt-7 lg:mt-0">
        <img
          src={theme?.theme === "Light" ? heroImg : heroImgDark}
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
