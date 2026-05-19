import pccoeLogo from "../../assets/images/pccoe-logo-new.webp";
import xcaliberCompanyLogo from "../../assets/images/xcaliberLogo.jpeg";

const EducationAndExp = () => {
  return (
    <section
      className="
      px-6 md:px-12 lg:px-24
      py-16 md:py-24
      "
      id="experience"
    >
      {/* Heading */}
      <div className="mb-14 md:mb-20">
        <h1
          className="
          text-4xl sm:text-5xl md:text-6xl
          font-bold
          text-black
          dark:text-white
          "
        >
          Experience &{" "}
          <span className="text-violet-500">
            Education
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
          My professional journey and academic
          background.
        </p>
      </div>

      {/* Timeline */}
      <div
        className="
        relative
        md:border-l-4
        border-violet-600
        md:ml-6
        space-y-10 md:space-y-14
        "
      >
        {/* Experience Card */}
        <div className="relative md:ml-12">

          {/* Timeline Dot */}
          <div
            className="
            hidden md:block
            absolute
            -left-[62px]
            top-10
            w-6 h-6
            bg-violet-600
            rounded-full
            border-[6px]
            border-[#0A1124]
            shadow-lg
            "
          ></div>

          {/* Card */}
          <div
            className="
            bg-gray-100
            dark:bg-black
            border
            border-gray-200
            dark:border-slate-700
            rounded-[24px] md:rounded-[30px]
            p-6 md:p-10
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            hover:border-violet-600
            transition-all duration-500
            "
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5">

              <div>

                {/* Badge */}
                <span
                  className="
                  bg-violet-100
                  dark:bg-violet-900/30
                  text-violet-700
                  dark:text-violet-300
                  px-4 py-2
                  rounded-full
                  text-xs md:text-sm
                  font-semibold
                  "
                >
                  WORK EXPERIENCE
                </span>

                <div className="flex items-center gap-4 mt-5">

                  {/* Optional Company Logo */}
                  {/* 
                  <div className="bg-slate-800 p-2 rounded-2xl shadow-md flex-shrink-0">
                    <img
                      src={xcaliberCompanyLogo}
                      alt="Xcaliber Logo"
                      className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-contain"
                    />
                  </div>
                  */}

                  {/* Company Name */}
                  <h2
                    className="
                    text-2xl sm:text-3xl md:text-4xl
                    font-bold
                    leading-tight
                    text-black
                    dark:text-white
                    "
                  >
                    Xcaliber Infotech
                  </h2>
                </div>

                {/* Role */}
                <p
                  className="
                  text-violet-600
                  dark:text-violet-400
                  text-lg sm:text-xl md:text-2xl
                  font-medium
                  mt-2
                  "
                >
                  Jr Software Developer
                </p>
              </div>

              {/* Date */}
              <div
                className="
                bg-white
                dark:bg-slate-800
                border border-gray-200
                dark:border-slate-700
                px-4 py-2 md:px-5 md:py-3
                rounded-xl
                text-gray-600
                dark:text-zinc-300
                font-medium
                text-sm md:text-base
                w-fit
                "
              >
                Mar 2024 – Present
              </div>
            </div>

            {/* Description */}
            <div
              className="
              mt-8 md:mt-10
              space-y-4 md:space-y-5
              text-gray-600
              dark:text-zinc-300
              text-base md:text-lg
              leading-relaxed
              "
            >
              <p>
                ⚡ Developed responsive and scalable
                UI components for real-world business
                applications using PHP, JavaScript,
                jQuery, AJAX, JSON, HTML, CSS, and
                Bootstrap.
              </p>

              <p>
                ⚡ Worked on the Spend Intel product,
                collaborating with backend teams to
                integrate APIs and improve user
                experience.
              </p>

              <p>
                ⚡ Built reusable UI structures and
                contributed to responsive,
                performance-focused interfaces for
                enterprise solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="relative md:ml-12">

          {/* Timeline Dot */}
          <div
            className="
            hidden md:block
            absolute
            -left-[62px]
            top-10
            w-6 h-6
            bg-violet-600
            rounded-full
            border-[6px]
            border-[#0A1124]
            shadow-lg
            "
          ></div>

          {/* Card */}
          <div
            className="
            bg-gray-100
            dark:bg-black
            border
            border-gray-200
            dark:border-slate-700
            rounded-[24px] md:rounded-[30px]
            p-6 md:p-10
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            hover:border-violet-600
            transition-all duration-500
            "
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

              <div className="flex flex-col sm:flex-row gap-5 items-start">

                {/* Logo */}
                <div
                  className="
                  bg-white
                  dark:bg-slate-800
                  p-3
                  rounded-2xl
                  shadow-md
                  border border-gray-200
                  dark:border-slate-700
                  mx-auto sm:mx-0
                  "
                >
                  <img
                    src={pccoeLogo}
                    alt="PCCOE Logo"
                    className="
                    w-[60px] h-[60px]
                    md:w-[70px] md:h-[70px]
                    object-contain
                    "
                  />
                </div>

                {/* Details */}
                <div className="text-center sm:text-left">

                  <span
                    className="
                    bg-violet-100
                    dark:bg-violet-900/30
                    text-violet-700
                    dark:text-violet-300
                    px-4 py-2
                    rounded-full
                    text-xs md:text-sm
                    font-semibold
                    "
                  >
                    EDUCATION
                  </span>

                  <h2
                    className="
                    text-2xl sm:text-3xl md:text-4xl
                    font-bold
                    mt-5
                    text-black
                    dark:text-white
                    "
                  >
                    Pimpri Chinchwad College Of
                    Engineering
                  </h2>

                  <p
                    className="
                    text-lg md:text-2xl
                    font-medium
                    text-gray-700
                    dark:text-zinc-300
                    mt-2
                    "
                  >
                    B.E (Computer Science)
                  </p>

                  <p
                    className="
                    text-base md:text-lg
                    text-gray-500
                    dark:text-zinc-400
                    mt-4
                    "
                  >
                    CGPA:
                    <span
                      className="
                      font-bold
                      text-black
                      dark:text-white
                      ml-2
                      "
                    >
                      7.46 / 10
                    </span>
                  </p>
                </div>
              </div>

              {/* Date */}
              <div
                className="
                bg-white
                dark:bg-slate-800
                border border-gray-200
                dark:border-slate-700
                px-4 py-2 md:px-5 md:py-3
                rounded-xl
                text-gray-600
                dark:text-zinc-300
                font-medium
                text-sm md:text-base
                w-fit
                "
              >
                2019 – 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndExp;