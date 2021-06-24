import React from "react";
import "./socialmedia.css";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import StarBorderIcon from "@material-ui/icons/StarBorder";
function SocialMedia() {
  return (
    <div className="body">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/prateek-pixels/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/Prateek_pixels?s=08" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/invites/contact/?i=174ny7f1rjmgw&utm_content=2vm6sbq"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/prateek-pixels" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://github.com/prateek-pixels" target="_blank" target="_blank">
          <i className="fa fa-star"></i>
        </a>
        <br />
      </div>
      <strong>Let's Connect and give it a star</strong>

      {/* <div className="connect">
        <br />
        <Fab variant="extended" className="fab">
          <StarBorderIcon />
          GitHub
        </Fab>
        <br />
        <strong>Git it a Star</strong>
      </div> */}
    </div>
  );
}

export default SocialMedia;