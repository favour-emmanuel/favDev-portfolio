import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTheme } from "../Redux/slice/themeSlice";
import lineBg from "../assets/line-BGdesign.svg";
import { portfolioItems } from "../constants/data";

const ProjectPage = () => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={`${
        theme?.theme === "Light" ? "bg-appLight" : "bg-appBlack text-[#BBBCBD]"
      } lg:py-14 py-5 px-5 lg:px-14 relative`}
    >
      <div>
        <h1
          className={`font-extrabold lg:text-[42px] text-4xl my-4 border-b ${
            theme?.theme === "Dark"
              ? "border-b-[#8fffafba] bg-gradient-to-r from-[#8FFFAE] to-[#ABFF74] bg-clip-text text-transparent"
              : "border-b-[#3bca98d4] text-[#1B1E22]"
          }  pb-5 lg:max-w-[13rem] max-w-[10rem]`}
        >
          Portfolio.
        </h1>
        <p className=" text-sm lg:text-base w-full lg:max-w-[42rem]">
          <h4 className="font-semibold text-base my-2">
            Welcome to my portfolio!
          </h4>
          Here, you'll find a selection of my most recent projects, showcasing
          my skills and expertise in frontend development. Each project
          highlights my ability to create engaging, user-friendly web
          applications using modern technologies like React, TailwindCSS, and
          more. From interactive user interfaces to responsive design solutions,
          my work demonstrates my commitment to delivering high-quality results.
          Feel free to explore these projects to see how I've transformed ideas
          into functional and visually appealing web experiences.
        </p>
      </div>

      <div className=" hidden h-0 lg:block lg:absolute right-0 bottom-4 top-0">
        <img src={lineBg} alt="" className="h-[25rem]" />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-[6.85rem]">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className={`${
              theme?.theme === "Light" ? "bg-[#fffbfb]" : "bg-[#242424]"
            } p-3  rounded-lg`}
          >
            <div className="w-full">
              <Link to={item.url} target="_blank">
                <img src={item.image} alt="snapshot of the project" />
              </Link>
            </div>
            <div>
              <h1 className={`font-bold text-base my-2`}>{item.title}</h1>
              <p className={`font-light my-1 lg:text-base text-sm`}>
                {item.label}
              </p>

              <div className="flex flex-wrap items-center gap-3 py-3">
                {item.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className={`tool-item ${
                      theme?.theme === "Light"
                        ? "bg-[#7bdc97a2]"
                        : "text-[#8fffafcf] bg-appBlack"
                    }  text-sm px-3 py-1 rounded-full flex justify-center items-center`}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
