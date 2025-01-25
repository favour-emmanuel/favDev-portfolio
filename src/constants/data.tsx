import { Icon } from "@iconify/react/dist/iconify.js";

export interface navItem {
  label: string;
  path: string;
}

export const navItems: navItem[] = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "About",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Skills",
    path: "/skills",
  },

  {
    label: "Contact",
    path: "/contact",
  },
];

export interface portfolio {
  image: string;
  title: string;
  label: string;
  tools: string[];
  url: string;
}

export const portfolioItems: portfolio[] = [
  {
    image: "/shot-1.png",
    title: "MC Profile Site",
    label:
      "A dynamic website showcasing the MC's portfolio, services, and booking information.",
    tools: ["React", "Typescript", "Tailwindcss"],
    url: "https://www.kezzyspeaks.ca/",
  },

  {
    image: "/shot-2.png",
    title: "Gadgets Store",
    label:
      "An interactive online store specializing in headsets and audio equipment, designed to offer users an easy and engaging shopping experience.",
    tools: ["React", "Typescript", "Tailwindcss"],
    url: "https://hng-ecomm-site.vercel.app/",
  },

  {
    image: "/short-3.png",
    title: "Food Services",
    label:
      "An intuitive website designed for hassle-free burger ordering, allowing customers to choose from a variety of burgers, customize their orders, and enjoy seamless delivery or pickup options.",
    tools: ["React", "Typescript", "Tailwindcss"],
    url: "https://didi-eats-website.vercel.app/",
  },
  {
    image: "/shot-4.png",
    title: "Real Estate Site",
    label:
      "A modern real estate site offering a seamless experience for browsing and purchasing properties,and expert advice to guide users through every step of their real estate journey.",
    tools: ["React", "Typescript", "Tailwindcss"],
    url: "https://real-estate-investment-liart.vercel.app/",
  },
  {
    image: "/shot-5.png",
    title: "Fashion Store",
    label:
      "An elegant fashion website that showcases a curated collection of clothing and accessories, with easy navigation, high-quality images, and personalized recommendations to help you find the perfect pieces for any occasion",
    tools: ["React", "Typescript", "Tailwindcss"],
    url: "https://shop-co-smoky.vercel.app/",
  },
  {
    image: "/shot-6.png",
    title: "Finance Store",
    label:
      "An elegant fashion website that showcases a curated collection of clothing and accessories, with easy navigation, high-quality images, and personalized recommendations to help you find the perfect pieces for any occasion",
    tools: ["React", "Typescript", "Tailwindcss"],
    url: "https://one-point-landing-page.vercel.app/",
  },
];

export interface skills {
  icon?: JSX.Element;
  text: string;
}

export const mySkills: skills[] = [
  {
    icon: <Icon icon="logos:javascript" />,
    text: "Javascript",
  },
  {
    icon: <Icon icon="devicon:typescript" />,
    text: "Typescript",
  },
  {
    icon: <Icon icon="logos:react" />,
    text: "React",
  },
  {
    icon: <Icon icon="devicon:nextjs" />,
    text: "Next js",
  },
  {
    icon: <Icon icon="cib:jquery" />,
    text: "Jquery",
  },
  {
    icon: <Icon icon="devicon:tailwindcss" />,
    text: "Tailwindcss",
  },
  {
    icon: <Icon icon="logos:bootstrap" />,
    text: "Bootstrap",
  },
  {
    icon: <Icon icon="logos:figma" />,
    text: "Figma",
  },
  {
    icon: <Icon icon="logos:npm-icon" />,
    text: "Npm",
  },
  {
    icon: <Icon icon="devicon:git" />,
    text: "Git",
  },
  {
    icon: <Icon icon="ant-design:github-outlined" />,
    text: "Github",
  },
];
