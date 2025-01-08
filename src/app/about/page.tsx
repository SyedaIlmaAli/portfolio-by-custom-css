import React from "react";
import AboutComponent from "../components/AboutComponent";
import Education from "../components/Education";
import History from "../components/WorkHistory";

const About = () => {
  return (
    <div>
      <AboutComponent/>
      <Education/>
      <History/>
    </div>
  );
};

export default About;
