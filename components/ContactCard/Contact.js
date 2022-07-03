import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div
          className={`${classes.contactCard} d-flex justify-content-center align-items-center`}
        >
          <div className="text-center" style={{ zIndex: "5" }}>
            <h2 >Want to talk more?</h2>
            <button
              className="btn btn-warning btn-lg"
              style={{ padding: "16px 64px"}}
            >
              Contact Us
            </button>
          </div>
          <div className={classes.bg1}></div>
          <div className={classes.bg2}></div>
          <div className={classes.bg3}></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
