import Lottie from "lottie-react";
import newManCoding from "../../assets/images/newManCoding.json";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
} from "react-icons/fa";

import {
  SiJquery,
  SiTailwindcss,
  SiFirebase,
  SiNpm,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 className="text-orange-500" />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt className="text-blue-500" />,
      name: "CSS3",
    },
    {
      icon: <FaJsSquare className="text-yellow-400" />,
      name: "JavaScript",
    },
    {
      icon: <SiJquery className="text-blue-600" />,
      name: "jQuery",
    },
    {
      icon: <FaReact className="text-cyan-400" />,
      name: "React.js",
    },
    {
      icon: <FaJava className="text-red-500" />,
      name: "Java",
    },
    {
      icon: <SiNpm className="text-red-600" />,
      name: "NPM",
    },
    {
      icon: (
        <SiTailwindcss className="text-cyan-500" />
      ),
      name: "Tailwind",
    },
    {
      icon: (
        <SiFirebase className="text-yellow-500" />
      ),
      name: "Firebase",
    },
  ];

  return (
    <section
      className="
      px-6 sm:px-10 md:px-16 lg:px-24
      py-16 md:py-24
      "
      id="skills"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

        {/* Left Animation */}
        <div className="flex justify-center order-1">

          <Lottie
            animationData={newManCoding}
            loop={true}
            className="
            w-[260px] h-[260px]
            sm:w-[340px] sm:h-[340px]
            md:w-[420px] md:h-[420px]
            lg:w-[500px] lg:h-[500px]
            "
          />

        </div>

        {/* Right Content */}
        <div className="order-2 text-center lg:text-left">

          {/* Heading */}
          <h1
            className="
            text-4xl sm:text-5xl md:text-6xl
            font-bold
            mb-4
            text-black
            dark:text-white
            "
          >
            What{" "}
            <span className="text-violet-500">
              I Do
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="
            text-gray-500
            dark:text-zinc-400
            text-sm sm:text-lg md:text-xl
            uppercase
            mb-8 md:mb-10
            tracking-wide
            leading-relaxed
            "
          >
            A Software Developer Passionate About
            Building Modern Web Experiences
          </p>

          {/* Skills Grid */}
          <div
            className="
            grid grid-cols-3
            gap-4 md:gap-6
            mb-10 md:mb-12
            "
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="
                bg-gray-100
                dark:bg-black
                border
                border-gray-200
                dark:border-slate-700
                rounded-2xl
                p-5
                flex flex-col
                items-center
                gap-3
                hover:-translate-y-2
                hover:border-violet-600
                hover:shadow-lg
                transition-all duration-300
                "
              >
                <div className="text-4xl sm:text-5xl md:text-6xl">
                  {skill.icon}
                </div>

                <p
                  className="
                  text-gray-700
                  dark:text-zinc-300
                  text-sm sm:text-base md:text-lg
                  text-center
                  "
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          {/* Points */}
          <div
            className="
            space-y-5 md:space-y-6
            text-base sm:text-lg md:text-xl
            text-gray-600
            dark:text-zinc-300
            leading-relaxed
            "
          >
            <p>
              ⚡ Experienced in building responsive
              and modern web interfaces using HTML,
              CSS, JavaScript, React.js, Tailwind
              CSS, and jQuery — focused on clean UI
              and seamless user experiences.
            </p>

            <p>
              ⚡ Hands-on experience developing
              real-world web applications and UI
              components, collaborating with backend
              teams for integration and delivering
              scalable business solutions.
            </p>

            <p>
              ⚡ Passionate about writing clean,
              reusable code and continuously learning
              modern frontend technologies to build
              impactful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;