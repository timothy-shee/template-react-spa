import React from "react";
import Navbar from '../components/nav/Navbar'
import Footer from '../components/foot/Footer'

function SingleLayout(props) {
  const { children } = props;
  return (
    <div>
      <Navbar name={props.name} />
      {children}
      <Footer />
    </div>
  );
}

export default SingleLayout;
