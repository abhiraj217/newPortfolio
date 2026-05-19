import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiSass,
  SiFirebase,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

import rohanSystems from "../../assets/images/rohansystemsImage.png";
import githubFinder from "../../assets/images/githubfinder.png";
import dentalClinic from "../../assets/images/denviaImage.png";
import patientPortal from "../../assets/images/karkamkarPortalImage.png";
import contactKeeper from "../../assets/images/contactkeeper.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Denvia Dental Clinic",
      image: dentalClinic,
      description:
        "Developed a responsive dental clinic website with modern UI, services section, appointment flow, and optimized user experience.",
      liveLink: "https://denviadental.in",
      githubLink: "https://github.com/abhiraj217/Denvia-Dental-Clinic",
        tech: [
        <FaReact className="text-cyan-400" />,
        <FaHtml5 className="text-orange-500" />,
        <SiSass className="text-pink-500" />,
      ],
    },

    {
      title: "Rohan Systems",
      image: rohanSystems,
      description:
        "Built a real-world IT solutions website featuring services, responsive layouts, interactive UI, and business-focused design.",
      liveLink: "https://rohansystems.com",
      githubLink: "https://github.com/abhiraj217/Rohan-Systems",
        tech: [
        <FaReact className="text-cyan-400" />,
        <FaHtml5 className="text-orange-500" />,
        <SiTailwindcss className="text-cyan-500" />,
      ],
    },

    {
      title: "Github Finder",
      image: githubFinder,
      description:
        "Created a GitHub profile finder application with search functionality and dynamic user data rendering using APIs.",
      liveLink: "https://github.com/abhiraj217/Github-Finder",
      githubLink: "https://github.com/abhiraj217/Github-Finder",
        tech: [
        <FaReact className="text-cyan-400" />,
        <FaHtml5 className="text-orange-500" />,
        <SiSass className="text-pink-500" />,
      ],
    },

    {
      title: "Dr Karkamkar Patient Portal",
      image: patientPortal,
      description:
        "Developed a patient management portal with authentication, records management, and secure full-stack architecture.",
      liveLink: "https://github.com/siddhesh-06/dk-frontend",
      githubLink: "https://github.com/siddhesh-06/dk-frontend",
        tech: [
        <FaReact className="text-cyan-400" />,
        <FaNodeJs className="text-green-500" />,
        <SiExpress className="text-gray-400" />,
        <SiFirebase className="text-yellow-500" />,
      ],
    },

    {
      title: "Contact Keeper",
      image: contactKeeper,
      description:
        "Built a full-stack contact management application with authentication, CRUD operations, and cloud data storage.",
      liveLink: "/",
      githubLink: "/",
        tech: [
        <FaReact className="text-cyan-400" />,
        <FaNodeJs className="text-green-500" />,
        <SiExpress className="text-gray-400" />,
        <SiFirebase className="text-yellow-500" />,
      ],
    },
  ];

  return (
    <section
      className="
      px-6 sm:px-10 md:px-16 lg:px-24
      py-16 md:py-24
      "
      id="projects"
    >
      {/* Heading */}
      <div className="mb-12 md:mb-16 text-center lg:text-left">

        <h1
          className="
          text-4xl sm:text-5xl md:text-6xl
          font-bold
          text-black
          dark:text-white
          "
        >
          Featured{" "}
          <span className="text-violet-500">
            Projects
          </span>
        </h1>

        <p
          className="
          text-gray-500
          dark:text-zinc-400
          text-base sm:text-lg md:text-xl
          mt-4
          "
        >
          Real-world applications and projects
          I have built.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        className="
        grid grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8 lg:gap-10
        "
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="
            bg-gray-100
            dark:bg-black
            rounded-[24px] lg:rounded-[30px]
            border
            border-gray-200
            dark:border-slate-700
            shadow-lg
            overflow-hidden
            hover:-translate-y-3
            hover:border-violet-600
            hover:shadow-2xl
            transition-all duration-500
            "
          >
            {/* Project Image */}
            <div
              className="
              relative
              h-[220px] sm:h-[250px]
              overflow-hidden
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                w-full h-full
                object-cover
                hover:scale-110
                transition-all duration-500
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-8">

              {/* Title */}
              <h2
                className="
                text-2xl md:text-3xl
                font-semibold
                mb-4
                text-black
                dark:text-white
                "
              >
                {project.title}
              </h2>

              {/* Description */}
              <p
                className="
                text-gray-600
                dark:text-zinc-300
                text-sm sm:text-base md:text-lg
                leading-relaxed
                min-h-[100px] md:min-h-[120px]
                "
              >
                {project.description}
              </p>

              {/* Tech Stack */}
              <div
                className="
                flex justify-center
                gap-4 md:gap-5
                text-3xl md:text-4xl
                my-6 md:my-8
                flex-wrap
                "
              >
                {project.tech.map((icon, i) => (
                  <span
                    key={i}
                    className="
                    bg-white
                    dark:bg-slate-800
                    border border-gray-200
                    dark:border-slate-700
                    p-3
                    rounded-xl
                    hover:scale-110
                    transition-all duration-300
                    "
                  >
                    {icon}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div
                className="
                flex flex-col
                sm:flex-row
                justify-center
                gap-3 md:gap-4
                "
              >
                {/* Live Demo */}
                <Link
                  to={project.liveLink}
                  target="blank"
                  className="
                  bg-violet-700
                  hover:bg-violet-800
                  text-white
                  px-5 py-3
                  rounded-xl
                  transition-all duration-300
                  text-sm md:text-base
                  font-medium
                  shadow-md
                  hover:scale-105
                  "
                >
                  Live Demo
                </Link>

                {/* Github */}
                <Link
                  to={project.githubLink}
                  target="blank"
                  className="
                  border
                  border-violet-700
                  text-violet-700
                  dark:text-violet-400
                  px-5 py-3
                  rounded-xl
                  flex items-center
                  justify-center
                  gap-2
                  hover:bg-violet-700
                  hover:text-white
                  transition-all duration-300
                  text-sm md:text-base
                  "
                >
                  <FaGithub />
                  Github
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;