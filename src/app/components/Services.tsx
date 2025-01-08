import React from "react";
import "../style/services.css";
import { FaFigma, FaLaptopCode } from "react-icons/fa";

import { MdOutlineNoPhotography } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";
import { IoLogoJavascript } from "react-icons/io";
import { RiCodeView } from "react-icons/ri";

const Services = () => {
  return (
    <main className="Services-container">
             <div className="Services-container2">
                 {/* top div */}
              <div className="Services-header-box">
                <h1 className="ser-title">My Services</h1>
                <p className="ser-des">Offering complete web solutions from development to design and optimization. Whether it&apos;s a stunning website, seamless user experience, or quick troubleshooting, I provide reliable services to meet your digital needs</p>
              </div>
              {/* boxes div */}
              <div className="boxes-container">
                    <div className="box">
                        <FaLaptopCode className="ser-icon"/>
                        <h2 className="web">Web Development</h2>
                        <span className="Title-box">Blog, E-Commerce</span>
                    </div>
                    <div className="box">
                        <FaFigma className="ser-icon"/>
                        <h2 className="web">UI/UX Design</h2>
                        <span className="Title-box">Mobile App, Website Design</span>
                    </div>
                    <div className="box">
                        <IoLogoJavascript className="ser-icon"/>
                        <h2 className="web">JavaScript Developer</h2>
                        <span className="Title-box">Experienced JavaScript Developer</span>
                    </div>
                    <div className="box">
                        <RiCodeView className="ser-icon"/>
                        <h2 className="web">Front-End Developement</h2>
                        <span className="Title-box">Complete front-end development</span>
                    </div>
                    <div className="box">
                        <MdOutlineNoPhotography className="ser-icon"/>
                        <h2 className="web">Portfolio Developer</h2>
                        <span className="Title-box">Business Website, Personal Portfolio Website</span>
                    </div>
                    <div className="box">
                        <CiMobile4 className="ser-icon"/>
                        <h2 className="web">Web App Development</h2>
                        <span className="Title-box">Blog, E-Commerce</span>
                    </div>
                    
              </div>

             </div>
        </main>
  );
};

export default Services;
