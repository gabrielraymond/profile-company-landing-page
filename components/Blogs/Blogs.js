import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import classes from "./Blogs.module.css";

const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
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
    <div className={classes.blogs}>
      <div className={classes.bg1}></div>
      <div className="container ">
        <div className="d-flex justify-content-between mt-4 mb-4">
          <h1>
            Our Latest <br />
            Blogs
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
              <Image
                src={"/Blogs/programming.jpg"}
                alt={"programming"}
                height={250}
                width={400}
                //   layout="responsive"
                objectFit="cover"
              />

              <h5>Web Solution</h5>
              <h4>Make a better website solution for your product.</h4>
              <Link href="/programming">
                <a>Read Blog &#8594;</a>
              </Link>
            </div>
          </div>
          <div className={classes.slideItem}>
            <div className={classes.card}>
              <Image
                src={"/Blogs/dataScience.jpg"}
                alt={"programming"}
                height={250}
                width={400}
                //   layout="responsive"
                objectFit="cover"
              />

              <h5>Web Solution</h5>
              <h4>Make a better website solution for your product.</h4>
              <Link href="/programming">
                <a>Read Blog &#8594;</a>
              </Link>
            </div>
          </div>
          <div className={classes.slideItem}>
            <div className={classes.card}>
              <Image
                src={"/Blogs/uiux.jpg"}
                alt={"programming"}
                height={250}
                width={400}
                //   layout="responsive"
                objectFit="cover"
              />

              <h5>Web Solution</h5>
              <h4>Make a better website solution for your product.</h4>
              <Link href="/programming">
                <a>Read Blog &#8594;</a>
              </Link>
            </div>
          </div>
          <div className={classes.slideItem}>
            <div className={classes.card}>
              <Image
                src={"/Blogs/programming.jpg"}
                alt={"programming"}
                height={250}
                width={400}
                //   layout="responsive"
                objectFit="cover"
              />

              <h5>Web Solution</h5>
              <h4>Make a better website solution for your product.</h4>
              <Link href="/programming">
                <a>Read Blog &#8594;</a>
              </Link>
            </div>
          </div>
          <div className={classes.slideItem}>
            <div className={classes.card}>
              <Image
                src={"/Blogs/dataScience.jpg"}
                alt={"programming"}
                height={250}
                width={400}
                //   layout="responsive"
                objectFit="cover"
              />

              <h5>Web Solution</h5>
              <h4>Make a better website solution for your product.</h4>
              <Link href="/programming">
                <a>Read Blog &#8594;</a>
              </Link>
            </div>
          </div>
          <div className={classes.slideItem}>
            <div className={classes.card}>
              <Image
                src={"/Blogs/uiux.jpg"}
                alt={"programming"}
                height={250}
                width={400}
                //   layout="responsive"
                objectFit="cover"
              />

              <h5>Web Solution</h5>
              <h4>Make a better website solution for your product.</h4>
              <Link href="/programming">
                <a>Read Blog &#8594;</a>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
      <div className={classes.bg2}></div>
    </div>
  );
};

export default Blogs;
