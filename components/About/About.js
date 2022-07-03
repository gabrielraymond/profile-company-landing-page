import Image from "next/image";
import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <section
      className={
        classes.about +
        " container d-flex align-items-center justify-content-between"
      }
      id="about"
    >
      <div className={classes.aboutImage}>
        <Image src="/AboutUs/aboutUs.jpg" alt="home" width="550" height="400" />
      </div>
      <div className={classes.content}>
        <h2 className={classes.header}>About Us</h2>
        <p className={classes.desc}>
          Simple innate summer fat appear basket his desire joy. Outword clother
          promise at gravity do exited. Suffcient particular impossible by
          reasonable oh expression is. Yet preference connection unpleasant yet
          melancholy but end appreance. And excellence partiality estimating
          terminated day everything.
        </p>
        <p className={classes.desc}>
          Blessing welcomed ladyship she met humoured sir breeding her. Six
          curiosity day assurance bed necassary.
        </p>
        <button className="btn btn-primary">More About Company</button>
      </div>
      <div className={classes.bg1}></div>
      <div className={classes.bg2}></div>
    </section>
  );
};

export default About;
