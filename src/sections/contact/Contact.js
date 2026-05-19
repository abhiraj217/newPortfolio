import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

import Lottie from "lottie-react";
import ContactAnimation from "../../assets/images/newsLetter.json";

const Contact = () => {
  return (
    <section
      className="
      px-6 md:px-12 lg:px-24
      py-16 md:py-24
      flex items-center
      "
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-12 lg:gap-20">
        {/* Left Side */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Heading */}
          <h1
            className="
            text-4xl sm:text-5xl
            md:text-6xl lg:text-7xl
            font-bold
            flex items-center
            justify-center lg:justify-start
            gap-3
            text-black
            dark:text-white
            "
          >
            Contact <span className="text-violet-500">Me</span>
            <span className="text-3xl md:text-4xl lg:text-5xl">☎️</span>
          </h1>

          {/* Subtitle */}
          <p
            className="
            uppercase
            text-gray-500
            dark:text-zinc-400
            text-sm sm:text-lg
            md:text-xl lg:text-2xl
            mt-8
            leading-relaxed
            "
          >
            Discuss a project or just want to say hi?
            <br className="hidden md:block" />
            My inbox is open for all.
          </p>

          {/* Email */}
          <h2
            className="
            text-xl sm:text-3xl
            md:text-4xl lg:text-5xl
            text-gray-500
            dark:text-zinc-300
            mt-8
            font-light
            break-words
            hover:text-violet-500
            transition-all duration-300
            "
          >
            abhirajdeshpande7@gmail.com
          </h2>

          {/* Social Icons */}
          <div
            className="
            flex justify-center
            lg:justify-start
            gap-4 md:gap-5
            mt-10
            flex-wrap
            "
          >
            {/* Github */}
            <Link
              to="https://github.com/abhiraj217"
              target="_blank"
              rel="noreferrer"
              className="
              w-12 h-12
              md:w-14 md:h-14
              lg:w-16 lg:h-16
              bg-zinc-800
              rounded-full
              flex justify-center items-center
              text-white
              text-xl md:text-2xl lg:text-3xl
              hover:scale-110
              transition-all duration-300
              "
            >
              <FaGithub />
            </Link>

            {/* LinkedIn */}
            <Link
              to="https://www.linkedin.com/in/abhiraj-deshpande-658536206/"
              target="_blank"
              rel="noreferrer"
              className="
              w-12 h-12
              md:w-14 md:h-14
              lg:w-16 lg:h-16
              bg-sky-500
              rounded-full
              flex justify-center items-center
              text-white
              text-xl md:text-2xl lg:text-3xl
              hover:scale-110
              transition-all duration-300
              "
            >
              <FaLinkedinIn />
            </Link>

            {/* Email */}
            <Link
              to="mailto:abhirajdeshpande7@gmail.com"
              className="
              w-12 h-12
              md:w-14 md:h-14
              lg:w-16 lg:h-16
              bg-red-500
              rounded-full
              flex justify-center items-center
              text-white
              text-xl md:text-2xl lg:text-3xl
              hover:scale-110
              transition-all duration-300
              "
            >
              <MdEmail />
            </Link>

            {/* Leetcode */}
            <Link
              to="https://leetcode.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="
              w-12 h-12
              md:w-14 md:h-14
              lg:w-16 lg:h-16
              bg-amber-400
              rounded-full
              flex justify-center items-center
              text-white
              text-xl md:text-2xl lg:text-3xl
              hover:scale-110
              transition-all duration-300
              "
            >
              <SiLeetcode />
            </Link>
          </div>
        </div>

        {/* Right Side Animation */}
        <div className="flex justify-center order-1 lg:order-2">
          <Lottie
            animationData={ContactAnimation}
            loop={true}
            className="
            w-[280px] h-[280px]
            sm:w-[350px] sm:h-[350px]
            md:w-[450px] md:h-[450px]
            lg:w-[500px] lg:h-[500px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
