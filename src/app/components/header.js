import React from "react";
import style from "./header.module.css";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div className={style.outer_div}>
        <div className={style.div1}>
          <h1 className={style.topic}>Content</h1>
          <p>About</p>
          <p> Experience</p>
          <p>Projects</p>
          <p>Hackathons</p>
          <p>Contact Us</p>
        </div>
        <div className={style.div2}>
          <h1 className={style.topic}>Dev Experience</h1>
          <p>Flutter</p>
          <p> Next Js</p>
          <p>React Js</p>
          <p>Node & Express JS</p>
          <p>Mongo db</p>
        </div>
        <div className={style.div3}>
          <h1 className={style.topic}>Work & Projects</h1>
          <p>Flutter dev Mukham.in</p>
          <p>Flutter dev Flick Analytics</p>
          <p>Four times</p>
          <p>Hackathon winner</p>
        </div>
        <div className={style.div4}>
          <h1 className={style.topic}>Contact Us</h1>
          <p>+91 6396937375</p>
          <p>anup@gmail.com</p>
          <div className={style.logo}>
            <FiInstagram className={style.logo1} />
            <FiFacebook className={style.logo1} />
            <BsLinkedin className={style.logo1} />
            <FiTwitter className={style.logo1} />
          </div>
        </div>
      </div>
      <div className={style.space}></div>
      <div className={style.name}>
        <p>This website is developed by anoop kumar</p>
      </div>
    </div>
  );
};

export default Header;
