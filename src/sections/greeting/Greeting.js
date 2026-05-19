import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import Lottie from "lottie-react";
import CodingGif from "../../assets/images/Codingboy.json";

const Greeting = () => {
  return (
    <section
      className="
      px-6 sm:px-10 md:px-16 lg:px-24
      pt-14 lg:pt-20
      flex items-center
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 w-full">
        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="flex flex-col">
            {/* Heading */}
            <h1
              className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              font-bold
              leading-tight
              text-black
              dark:text-white
              "
            >
              Hi All, I'm <span className="text-violet-500">Abhiraj</span>
            </h1>

            {/* Description */}
            <p
              className="
              my-6 md:my-8
              text-base sm:text-lg md:text-xl lg:text-2xl
              text-gray-600
              dark:text-zinc-300
              leading-relaxed
              max-w-3xl
              mx-auto lg:mx-0
              "
            >
              A Software Developer 🚀 passionate about building scalable web
              applications and engaging digital experiences using modern
              technologies like React.js, JavaScript, Tailwind CSS, and
              full-stack development principles — always learning and creating
              impactful solutions.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 md:gap-5 my-6 flex-wrap">
              {/* Github */}
              <Link
                to="https://github.com/abhiraj217"
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                bg-zinc-800
                rounded-full
                flex justify-center items-center
                text-white
                text-xl md:text-2xl lg:text-3xl
                hover:scale-110
                hover:shadow-lg
                transition-all duration-300
                "
              >
                <FaGithub />
              </Link>

              {/* Linkedin */}
              <Link
                to="https://www.linkedin.com/in/abhiraj-deshpande-658536206/"
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                bg-sky-500
                rounded-full
                flex justify-center items-center
                text-white
                text-xl md:text-2xl lg:text-3xl
                hover:scale-110
                hover:shadow-lg
                transition-all duration-300
                "
              >
                <FaLinkedin />
              </Link>

              {/* Email */}
              <Link
                to="mailto:abhirajdeshpande7@gmail.com"
                className="
                w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                bg-red-500
                rounded-full
                flex justify-center items-center
                text-white
                text-xl md:text-2xl lg:text-3xl
                hover:scale-110
                hover:shadow-lg
                transition-all duration-300
                "
              >
                <MdEmail />
              </Link>

              {/* Leetcode */}
              <Link
                to="https://leetcode.com/u/Abhiraj217/"
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                bg-amber-400
                rounded-full
                flex justify-center items-center
                text-white
                text-xl md:text-2xl lg:text-3xl
                hover:scale-110
                hover:shadow-lg
                transition-all duration-300
                "
              >
                <SiLeetcode />
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 mt-4">
              {/* Contact Button */}
              <Link
                to="#contact"
                className="
                bg-violet-700
                hover:bg-violet-800
                text-white
                px-6 md:px-8
                py-3 md:py-4
                rounded-xl
                text-base md:text-lg
                font-medium
                transition-all duration-300
                hover:scale-105
                shadow-lg
                "
              >
                Contact Me
              </Link>

              {/* Resume Button */}
              <Link
                to="https://drive.google.com/file/d/1tjLcmXXlGrdtMVFxmyqeRvvCGRF1cafM/view?usp=sharing"
                target="blank"
                className="
                border-2
                border-violet-700
                text-violet-700
                dark:text-violet-400
                px-6 md:px-8
                py-3 md:py-4
                rounded-xl
                text-base md:text-lg
                font-medium
                hover:bg-violet-700
                hover:text-white
                transition-all duration-300
                "
              >
                See My Resume
              </Link>
            </div>
          </div>
        </div>

        {/* Right Animation */}
        <div className="flex justify-center order-1 lg:order-2">
          <Lottie
            animationData={CodingGif}
            loop={true}
            className="
            w-[260px] h-[260px]
            sm:w-[320px] sm:h-[320px]
            md:w-[420px] md:h-[420px]
            lg:w-[500px] lg:h-[500px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Greeting;
