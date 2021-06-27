import React from "react";
import "./socialmedia.css";
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

        <br />
      </div>
      <strong>Let's Connect.</strong>
    </div>
  );
}

export default SocialMedia;
