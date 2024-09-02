import { useSelector } from "react-redux";
import { selectTheme } from "../Redux/slice/themeSlice";
import lineBg from "../assets/line-BGdesign.svg";
import { portfolio } from "../constants";
import shot1 from "../assets/shot-1.png";
import shot2 from "../assets/shot-2.png";
import shot3 from "../assets/short-3.png";
import shot4 from "../assets/shot-4.png";
import shot5 from "../assets/shot-5.png";
import shot6 from "../assets/shot-6.png";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  const theme = useSelector(selectTheme);

  const portfolioItems: portfolio[] = [
    {
      image: shot1,
      title: "MC Profile Site",
      label:
        "A dynamic website showcasing the MC's portfolio, services, and booking information.",
      tools: ["React", "Typescript", "Tailwindcss"],
      url: "https://www.kezzyspeaks.ca/",
    },

    {
      image: shot2,
      title: "Gadgets Store",
      label:
        "An interactive online store specializing in headsets and audio equipment, designed to offer users an easy and engaging shopping experience.",
      tools: ["React", "Typescript", "Tailwindcss"],
      url: "https://hng-ecomm-site.vercel.app/",
    },

    {
      image: shot3,
      title: "Food Services",
      label:
        "An intuitive website designed for hassle-free burger ordering, allowing customers to choose from a variety of burgers, customize their orders, and enjoy seamless delivery or pickup options.",
      tools: ["React", "Typescript", "Tailwindcss"],
      url: "https://didi-eats-website.vercel.app/",
    },
    {
      image: shot4,
      title: "Real Estate Site",
      label:
        "A modern real estate site offering a seamless experience for browsing and purchasing properties,and expert advice to guide users through every step of their real estate journey.",
      tools: ["React", "Typescript", "Tailwindcss"],
      url: "https://real-estate-investment-liart.vercel.app/",
    },
    {
      image: shot5,
      title: "Fashion Store",
      label:
        "An elegant fashion website that showcases a curated collection of clothing and accessories, with easy navigation, high-quality images, and personalized recommendations to help you find the perfect pieces for any occasion",
      tools: ["React", "Typescript", "Tailwindcss"],
      url: "https://quiet-banoffee-5ddb9f.netlify.app/",
    },
    {
      image: shot6,
      title: "Finance Store",
      label:
        "An elegant fashion website that showcases a curated collection of clothing and accessories, with easy navigation, high-quality images, and personalized recommendations to help you find the perfect pieces for any occasion",
      tools: ["React", "Typescript", "Tailwindcss"],
      url: "https://one-point-landing-pgae.vercel.app/",
    },
  ];

  return (
    <div
      className={`${
        theme?.theme === "Light" ? "bg-appLight" : "bg-appBlack text-[#BBBCBD]"
      } lg:py-14 py-5 px-5 lg:px-14 relative`}
    >
      <div>
        <h1
          className={`font-extrabold lg:text-4xl text-2xl my-4 border-b ${
            theme?.theme === "Dark"
              ? "border-b-[#8fffafba]"
              : "border-b-[#3bca98d4] "
          }  pb-4 max-w-[6rem]`}
        >
          portfolio.
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

      <div className=" hidden lg:block lg:absolute right-0 bottom-4 top-0">
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
