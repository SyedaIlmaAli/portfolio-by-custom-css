import React from "react";
import "../style/hero.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="header-container">
      <div className="header-boxes-con">
        <div>
          <Image
            src={"/images/ilma.png"}
            alt="Profile"
            width={200}
            height={200}
            className="hero-image"
          />
        </div>
        <div className="hero-right-div">
          <h1 className="title-hero">I&apos;m Syeda Ilma Ali Front-end Developer</h1>
          <p className="des-hero">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, sed
            debitis neque ea dolorum, aliquid eligendi molestias officiis
            inventore nemo nostrum cupiditate ut quis animi. Qui ipsa iure
            libero saepe!
          </p>
          <button className="hero-btn">HIRE ME</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
