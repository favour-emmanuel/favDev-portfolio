import { useSelector } from "react-redux";
import { selectTheme } from "../Redux/slice/themeSlice";
import aboutImg from "../assets/about-img2.jpg";

const AboutPage = () => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={`lg:px-16 px-5 py-16 flex flex-col lg:flex-row lg:gap-x-10 rounded-t-2xl lg:rounded-t-[3rem] ${
        theme?.theme === "Light" ? "bg-[#fbfbfb8d]" : "bg-[#1e1e1e]"
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
          className={`text-[14.5px] fonl leading-6 lg:leading-7 w-full lg:text-base my-2 lg:max-w-[40rem] ${
            theme?.theme === "Light" ? "text-appBlack" : "text-appWhite"
          }`}
        >
          <h3 className="text-sm font-bold">Hello!</h3>
          I'm a Web Developer with over 2 years of experience, skilled in all
          stages of dynamic web project development. I have in-depth expertise
          in advanced HTML5, CSS3, Tailwind CSS, JavaScript, jQuery, and
          React.js. I also bring a strong background in management and
          leadership, enabling me to effectively collaborate with teams and lead
          projects to successful completion. My passion for clean, efficient
          code and responsive design drives me to stay updated with the latest
          industry trends and technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
