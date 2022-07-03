import Image from "next/image";
import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <section
      className={
        classes.home +
        " container d-flex align-items-center justify-content-between"
      }
      id="home"
    >
      <div className="">
        <h1 className={classes.header}>
          We Provide
          <br />
          Best IT Services
        </h1>
        <p className={classes.desc}>
          Slingback fabric heels. Thin wraparound ankle strap. Squared hell and
          toe. Pointed toes, Padded insole with geometrical design.
        </p>
        <button className="btn btn-primary">View Services</button>
      </div>
      <div className={classes.homeImage}>
        <Image src="/home/homeImg.jpg" alt="home" width={650} height={750} />
      </div>
      <div className={classes.bg1}></div>
      <div className={classes.bg2}></div>
      <div className={classes.bg3}></div>
      <div className={classes.bg4}></div>
    </section>
  );
};

export default Home;
