import { Fragment } from "react";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
