import { useSelector } from "react-redux";
import { selectTheme } from "../Redux/slice/themeSlice";
import aboutImg from "../assets/about-img2.jpg";

const AboutPage = () => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={`lg:px-16 px-5 py-16 flex flex-col lg:flex-row lg:gap-x-10 ${
        theme?.theme === "Light" ? "bg-[#fbfbfbb1]" : "bg-[#1e1e1e]"
      }`}
    >
      <div className="h-full max-h-[25rem] w-full max-w-[25rem] flex justify-center items-center">
        <img
          src={aboutImg}
          alt=""
          className="rounded-xl  aspect-square object-cover"
        />
      </div>
      <div>
        <h2
          className={`w-full flex justify-center items-center h-12 px-3 border border-[#7bdc96] rounded-full max-w-[7rem] mt-5 mb-3 lg:mt-0 ${
            theme?.theme === "Light" ? "text-appBlack" : "text-appWhite"
          }`}
        >
          About me
        </h2>
        <span
          className={`font-bold text-[13.8px] my-2 ${
            theme?.theme === "Light" ? "text-[#5c6f79]" : "text-[#acff74bf]"
          }`}
        >
          Favour Emmanuel
        </span>
        <p
          className={`text-[14.5px] fonl leading-6 lg:leading-7 w-full lg:text-base my-2 lg:max-w-[36rem] ${
            theme?.theme === "Light" ? "text-appBlack" : "text-appWhite"
          }`}
        >
          Hello! I'm a Web Developer with over 2 years of experience.
          Experienced with all stages of the development cycle for dynamic web
          projects. Having an in-depth knowledge including advanced HTML5, CSS3,
          Tailwind Css Javascript, jQuery, React Js, and also a strong
          background in management and leadership.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
