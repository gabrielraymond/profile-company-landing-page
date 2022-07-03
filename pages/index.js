import { Fragment } from "react";
import About from "../components/About/About";
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/ContactCard/Contact";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";

function HomePage(props) {
  return (
    <Fragment>
      <Home />
      <About />
      <Services />
      <Blogs />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
