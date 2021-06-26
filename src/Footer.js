import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Fab from "@material-ui/core/Fab";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./Footer.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import PhoneAndroidRoundedIcon from "@material-ui/icons/PhoneAndroidRounded";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
const Footer = () => {
  const [{ cart, user }, setCart] = useStateValue();

  return (
    <footer>
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">About</div>
            <p>
              Welcome to Bookies, your number one source for all Books. Bookies
              are dedicated to providing you the best service, with a focus on
              dependability. Here, you can download any eBooks or Read them for
              free. <br />{" "}
              <span>
                {" "}
                <strong>
                  <em>Note: Don't buy any Book.</em>
                </strong>{" "}
              </span>
              <br />{" "}
              <span>
                {" "}
                <strong>
                  Sincerely, <br /> Prateek Srivastava
                </strong>
              </span>
            </p>
          </div>
          <div className="lower">
            <div className="topic">Developer Contact</div>
            <div className="phone">
              <i className="">
                <a href="tel:+91 7275769259">
                  <PhoneAndroidRoundedIcon />
                  +91-7275769259
                </a>
              </i>
            </div>
            <div className="email">
              <i className="">
                <a href="mailto: prateeksdr4@gmail.com" target="_blank">
                  <ContactMailRoundedIcon />
                  prateeksdr4@gmail.com
                </a>
              </i>
            </div>
          </div>
        </div>
        <div className="right box">
          {!user && (
            <form action="#">
              <Link to="/signin">
                <input type="submit" name="" value="Sign Up" />
              </Link>
              <div className="topic">Sign Up for free</div>
            </form>
          ) }

          <SocialMedia />
        </div>
      </div>
      <div className="bottom">
        {/* <div className="social"></div> */}
        <a href="https://github.com/prateek-pixels/Bookies" target="_blank">
          <Fab variant="extended" className="fab">
            <StarBorderIcon href="https://github.com/prateek-pixels" />
            Star
          </Fab>
        </a>
        <p>
          Copyright © {new Date().getFullYear()}
          <a href="https://clone-b8ccc.web.app/" target="_blank">
            Bookies
          </a>{" "}
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
