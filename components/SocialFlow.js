import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
  return (
    <div>
      <h1>Social Flow</h1>
      <p className="social-container">
        <a
          href="https://www.youtube.com/c/jamesqquick"
          className="a.instagram"
        >
          <FontAwesomeIcon icon={faYoutube} size="xs" />
        </a>
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="xs"  />
        </a>
        <a
          href="http://www.instagram.com/larnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="xs" />
        </a>
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="xs" />
        </a>
      </p>
    </div>
  );
}
