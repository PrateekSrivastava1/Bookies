import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { NavLink } from "react-router-dom";
const Firstwindow = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./images/coder-home.json"),
    });
  }, []);

  return (
    <>
      <section id="header" className="d-flex justify-content-center">
        <div className="container-fluid nav_bg">
          <div className="row mx-auto flex-column">
            <div className="col-10 mx-auto">
              <div className="row d-flex justify-content-center">
                <div className=" heading1 col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 style={{fontSize: '2.1rem'}}>
                    “ Code is like humor. When you have to explain it, it’s
                    bad.”
                  </h1>
                  <h2 className="my-3">– Cory House</h2>
                </div>
                <div className="col-lg-6  order-1 order-lg-2">
                  <div
                    className=" img-fluid animated pt-6 pt-lg-6"
                    ref={container}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Firstwindow;
