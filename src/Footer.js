import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
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
              <Link>
                <i className="">
                  <PhoneAndroidRoundedIcon />
                </i>
                +91-7275769259
              </Link>
            </div>
            <div className="email">
              <Link>
                <i className="">
                  <ContactMailRoundedIcon />
                </i>
                prateeksdr4@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="right box">
          <div className="topic">Sign Up for free</div>

          <form action="#">
            <Link to="/signin">
              <input type="submit" name="" value="Sign Up" />
            </Link>
            <SocialMedia />
            <strong className="socialText">Connect me on social media</strong>
          </form>
        </div>
      </div>
      <div className="bottom">
        <p>
          Copyright © 2020 <Link href="#">Bookies.com</Link> All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
