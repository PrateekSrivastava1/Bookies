import React from "react";
import "./socialmedia.css";
function FloatingSocialMedia() {
  return (
    <div>
      <div className="a-social-icons">
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
      </div>
    </div>
  );
}

export default FloatingSocialMedia;
