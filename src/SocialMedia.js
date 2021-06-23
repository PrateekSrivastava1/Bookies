import React from "react";
import "./socialmedia.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
function SocialMedia() {
  return (
    <div className="body">
      <input className="ip" type="checkbox" id="click" />
      <div>
        <i className="ii">
          <Link>
            <FacebookIcon />
          </Link>
        </i>
        <i className="ii">
          <Link>
            <InstagramIcon />
          </Link>
        </i>
        <i className="ii">
          <IconButton
            href="www.linkedin.com/in/prateek-pixels/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </i>
        <i className="ii">
          <Link>
            <TwitterIcon />
          </Link>
        </i>
        <label htmlFor="click">
          <span className="fas fa-plus"></span>
        </label>
      </div>
    </div>
  );
}

export default SocialMedia;
