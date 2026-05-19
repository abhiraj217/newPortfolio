import Lottie from "lottie-react";
import landingCubicals from "../../assets/images/landingpageCubical.json";

const LandingPage = () => {
  return (
    <section
      className="
      w-screen h-screen
      flex justify-center items-center
      bg-white dark:bg-zinc-900
      transition-all duration-300
      "
    >
      <div className="flex flex-col items-center">

        <Lottie
          animationData={landingCubicals}
          loop={true}
          className="
          w-[240px] h-[240px]
          sm:w-[320px] sm:h-[320px]
          md:w-[420px] md:h-[420px]
          lg:w-[500px] lg:h-[500px]
          "
        />

        {/* Name with coding tag */}
        <div
          className="
          flex items-center
          -mt-6
          "
        >
          <span
            className="
            text-slate-500
            dark:text-slate-400
            text-3xl md:text-4xl
            mr-2
            "
          >
            &lt;
          </span>

          <h1
            className="
            font-signature
            text-4xl md:text-5xl
            text-black
            dark:text-white
            "
          >
            Abhiraj
          </h1>

          <span
            className="
            text-slate-500
            dark:text-slate-400
            text-3xl md:text-4xl
            ml-2
            "
          >
            /&gt;
          </span>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;