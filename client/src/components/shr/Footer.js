import React from "react";
import "./shr.scss";
import Linkedin from "../../assets/logos/linkedin.png";
import Github from "../../assets/logos/github.png";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footerSections icons">
        <a
          href="https://www.linkedin.com/in/pamina-goldenberg-thiery/"
          target="_blank"
        >
          <Image src={Linkedin} />
        </a>
        <a href="https://github.com/alhanampi/" target="_blank">
          <Image src={Github} />
        </a>
      </div>
      <div className="footerSections">
        <h4>&copy; Pamina Goldenberg Thiery 2021</h4>
        <p>Para el banco Santander</p>
      </div>
      <div className="footerSections">
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          {"  "}
          alhanampi@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> 
          {"  "}
          (+5411) 6795-5422
        </p>
      </div>
    </footer>
  );
};

export default Footer;
