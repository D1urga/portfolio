"use client";
import React, { useState } from "react";
import style from "../layout.module.css";
import Link from "next/link";
import { FiLinkedin, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div>
      <div className={style.outer_div}>
        <h1>Anoop Kumar</h1>

        <Link
          href="https://www.linkedin.com/in/anoop-kumar-189159238"
          target="blank"
        >
          <FiLinkedin className={style.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
