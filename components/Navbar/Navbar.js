import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <div className={classes.logo}>Logo</div>
            <ul className={classes.navItems}>
              <li className={classes.navLink}>
                <Link href="#home">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="#testimonials">
                  <a>Testimonials</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn  me-2">Sign-in</button>
            <button className="btn btn-primary">Sign-Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
