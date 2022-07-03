import React, { useState } from "react";
import Slider from "react-slick";
import classes from "./Services.module.css";
const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  //   const [next, setNext] = useState()
  const [slider, setSlider] = useState();

  function next() {
    slider.slickNext();
  }

  function previous() {
    slider.slickPrev();
    // slider.slickPrev();
  }
  return (
    <div className={classes.services}>
      <div className="container ">
        <div className={classes.bg1}></div>
        <div className="d-flex justify-content-between mt-4 mb-4">
          <h1>
            Services we <br />
            Provide
          </h1>
          <div style={{ textAlign: "center" }}>
            <button className={classes.btnPrev} onClick={previous}>
              <div className={classes.left}></div>
            </button>
            <button className={classes.btnNext} onClick={next}>
              <div className={classes.right}></div>
            </button>
          </div>
        </div>

        <Slider ref={(c) => setSlider(c)} {...settings}>
          <div className={classes.slideItem}>
            <div className={classes.card}>
              <h4>UI/UX Designer</h4>
              <p>Slingback fabric heels. Thin wraparound ankle strap.</p>
            </div>
          </div>
          <div className={classes.slideItem}>
            <div className={classes.card}>
              <h4>Web Developer</h4>
              <p>Slingback fabric heels. Thin wraparound ankle strap.</p>
            </div>
          </div>
          <div className={classes.slideItem}>
            <div className={classes.card}>
              <h4>React Developer</h4>
              <p>Slingback fabric heels. Thin wraparound ankle strap.</p>
            </div>
          </div>
          <div className={classes.slideItem}>
            <div className={classes.card}>
              <h4>UI/UX Designer</h4>
              <p>Slingback fabric heels. Thin wraparound ankle strap.</p>
            </div>
          </div>
          <div className={classes.slideItem}>
            <div className={classes.card}>
              <h4>Web Developer</h4>
              <p>Slingback fabric heels. Thin wraparound ankle strap.</p>
            </div>
          </div>
          <div className={classes.slideItem}>
            <div className={classes.card}>
              <h4>React Developer</h4>
              <p>Slingback fabric heels. Thin wraparound ankle strap.</p>
            </div>
          </div>
        </Slider>
        <div className={classes.bg2}></div>
      </div>
    </div>
  );
};

export default Services;
