import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Greeting from "./sections/greeting/Greeting";
import Skills from "./sections/skills/Skills";
import EducationAndExp from "./sections/educationandExp/EducationAndExp";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/landingPage/LandingPage";

import ThemeContext from "./utils/ThemeContext";

const App = () => {
  const [themebtn, setThemebtn] =
    useState("Dark");

  const [showLanding, setShowLanding] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        themeValue: themebtn,
        setThemebtn,
      }}
    >
      <div
        className={
          themebtn === "Dark"
            ? "dark"
            : ""
        }
      >
        {/* Landing Page for 2 sec */}
        {showLanding ? (
          <LandingPage />
        ) : (
          <div
            className="
            bg-white
            dark:bg-zinc-900
            transition-all duration-300
            "
          >
            <Navbar />
            <Greeting />
            <Skills />
            <EducationAndExp />
            <Projects />
            <Contact />
            <Footer />
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;