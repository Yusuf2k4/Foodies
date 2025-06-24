import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Link from "next/link";
import Image from "next/image";
import { Navlink } from "./NavLink";
function Header() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="" priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Navlink href="/meals">Browse Meals</Navlink>
          </li>
          <li>
            <Navlink href="/community">Join the community</Navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
