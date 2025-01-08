import React from "react";
import "../style/hero.css";
import "../style/about.css";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const AboutComponent = () => {
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
          <div className="social-icon">
            <Link href={"https://www.linkedin.com/in/syeda-ilma-zaidi-279b9a248/"}>
            <FaLinkedin className="s-icon1"/>
            </Link>
            <Link href={"https://www.instagram.com/syedailmazaidi/"}>
            <FaInstagram className="s-icon2"/>
            </Link>
            <Link href={"https://x.com/syedailmaali"}>
            <FaTwitter className="s-icon3"/>
            </Link>
          </div>
        </div>
        <div className="hero-right-div">
          <h1 className="title-hero">About Me</h1>
          <p className="des-hero">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            reprehenderit amet ea quisquam saepe consectetur nisi voluptas cum a
            ut ad tempora sint, aliquid voluptatibus suscipit expedita porro,
            eligendi quam? Sapiente accusantium a beatae quis reiciendis aut
            accusamus tempora voluptates, iste tenetur est, dolorem eveniet
            magni sunt mollitia. Ab totam voluptatum illum cumque vel provident
            obcaecati eum. Deserunt, expedita totam!
          </p>
          <button className="hero-btn">HIRE ME</button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
