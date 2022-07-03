import React from "react";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className={`carousel-inner ${classes.testimonials}`}>
          <div className={`carousel-item active ${classes.testimonialsItem}`}>
            <div
              className="d-flex justify-content-center align-items-center "
              style={{
                backgroundImage: "url('/Testimonials/testimoni1.jpg')",
                height: "50vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100%",
                filter: "sepia(50%)",
                color: "#fff",
              }}
            >
              <div className="text-center">
                <h1>hello there</h1>
                <p>hello apa kabar semua yang ada disini</p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div
              className="d-flex justify-content-center align-items-center "
              style={{
                backgroundImage: "url('/Testimonials/testimoni2.jpg')",
                height: "50vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100%",
                filter: "sepia(50%)",
                color: "#fff",
              }}
            >
              <div className="text-center">
                <h1>hello there</h1>
                <p>hello apa kabar semua yang ada disini</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-flex justify-content-center align-items-center "
              style={{
                backgroundImage: "url('/Testimonials/testimoni3.jpg')",
                height: "50vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100%",
                filter: "sepia(50%)",
                color: "#fff",
              }}
            >
              <div className="text-center">
                <h1>hello there</h1>
                <p>hello apa kabar semua yang ada disini</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
