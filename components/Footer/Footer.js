import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id={classes.footer}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className={classes.logoFooter}>
            <h2>Logo</h2>
          </div>
          <div>
            <div className={classes.emailForm}>
              <input
                type="email"
                name="email"
                className={classes.emailInput}
                placeholder="Your Email Address"
              />
              <button className={classes.btnEmail}>
                Get Started <span>&rarr;</span>
              </button>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="ms-2 me-2">
                <Image
                  src="/Icon/facebook-f.png"
                  alt="facebook"
                  width="20"
                  height="20"
                />
              </div>
              <div className="ms-2 me-2">
                <Image
                  src="/Icon/instagram.png"
                  alt="facebook"
                  width="20"
                  height="20"
                />
              </div>
              <div className="ms-2 me-2">
                <Image
                  src="/Icon/linkedin-in.png"
                  alt="facebook"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div>
            <p>Copyright &copy; Landing Page</p>
          </div>
          <div className={classes.footerLink}>
            <ul>
              <li>
                <Link href="#home">
                  <a>HOME</a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a>ABOUT</a>
                </Link>
              </li>

              <li>
                <Link href="#testimonials">
                  <a>TESTIMONIALS</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p>Designed by landingpage</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
