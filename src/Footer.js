import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Fab from "@material-ui/core/Fab";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./Footer.css";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import PhoneAndroidRoundedIcon from "@material-ui/icons/PhoneAndroidRounded";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">About us</div>
            <p>
              Meri ek tang nakli hai...mai hockey ka bahut acha player
              tha.....ek din Uday bhai ko mere kisi baat par gussa aa gaya
              unhone meri hi hockey stick se meri tang tod di...par dil ke bahut
              ache hai turant hospital le gaye....meri nakli tang lagwayi or
              mujhe ye danda karid ke diya.....
            </p>
          </div>
          <div className="lower">
            <div className="topic">Contact us</div>
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
          <form action="#">
            <Link to="/signin">
              <input type="submit" name="" value="Sign Up" />
            </Link>
            <div className="topic">Sign Up for free</div>

            {/* <strong className="socialText">Connect me on social media</strong> */}
          </form>
          <SocialMedia />
        </div>
      </div>
      <div className="bottom">
        {/* <div className="social"></div> */}
        <a href="https://github.com/prateek-pixels" target="_blank">
        <Fab variant="extended" className="fab">
          <StarBorderIcon href="https://github.com/prateek-pixels" />
          GitHub
        </Fab>
        </a>
        <p>
          Copyright © 2020 <a href="#">Bookies.com</a> All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
