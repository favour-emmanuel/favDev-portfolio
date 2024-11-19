import { useSelector } from "react-redux";
import { selectTheme } from "../Redux/slice/themeSlice";
import salyImg from "../assets/Saly-10.png";
import { mySkills } from "../constants/data";

const SkillsPage = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className="lg:py-14 py-5 px-5 lg:px-14 my-10 flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:max-w-[38rem]">
        <h2
          className={`w-full flex justify-center items-center h-12 px-3 border border-[#7bdc96] rounded-full max-w-[7rem] mt-5 mb-3 lg:mt-0 ${
            theme?.theme === "Light" ? "text-appBlack" : "text-appWhite"
          }`}
        >
          My Skills
        </h2>
        <p
          className={`${
            theme?.theme === "Light" ? "text-appBlack" : "text-appWhite"
          } text-sm my-5 w-full max-w-[30rem]`}
        >
          I'm skilled in front-end development using HTML, CSS, JavaScript,
          React, TypeScript, and TailwindCSS. I focus on creating responsive,
          accessible, and optimized user experiences.
        </p>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 my-5">
          {mySkills.map((skill, index) => (
            <div key={index}>
              <h1
                className={`${
                  theme?.theme === "Dark" ? "text-appWhite" : ""
                } text-2xl lg:3xl`}
              >
                {skill.icon}
              </h1>
              <p
                className={`${
                  theme?.theme === "Dark" ? "text-appWhite" : ""
                } text-[13px] lg:text-[14.5px] my-3 font-light`}
              >
                {skill.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* image.. */}
      <div
        className={`max-w-[30rem] lg:max-w-[28rem] border lg:mt-0 mt-8 ${
          theme?.theme === "Dark"
            ? "bg-[#111] border-white/10"
            : "bg-[#eaf7f7] border-white/45"
        } rounded-lg`}
      >
        <img src={salyImg} alt="" />
      </div>
    </div>
  );
};

export default SkillsPage;
