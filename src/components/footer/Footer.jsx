import React from "react";
import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {

  const navigate = useNavigate();
  const navigationHandler= (type) => {
    if(type === "movie"){
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
  }
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem"
                      onClick={()=> navigationHandler("movie")}
                    >
                      Movies
                    </li>
                    <li className="menuItem"
                      onClick={()=> navigationHandler("tv")}
                    >
                      Tv Shows
                    </li>
                    <a target="_blank" href="https://www.linkedin.com/in/suraj-ambekar/">
                      <li className="menuItem">Contact</li>
                    </a>
                </ul>
                <div className="infoText">
                Thanks for visiting! We hope you found the information you were looking for. Don't forget to check back for updates on the latest movies. We're passionate about all things movies, and we hope our website helps you discover your next favorite film. Stay tuned for updates on the latest releases, trailers, and reviews. Happy movie-watching!
                </div>
                <div className="contact">
                  Made with dedication <span className="suraj"><a target="_blank" href="https://www.linkedin.com/in/suraj-ambekar/">Suraj Ambekar</a></span>
                </div>
                <div className="socialIcons">
                    <a target="_blank" href="https://github.com/Suraj-Ambekar/">
                      <span className="icon">
                          <FaGithub />
                      </span>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/ambekarsuraj03_/">
                      <span className="icon">
                          <FaInstagram />
                      </span>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/suraj-ambekar/">
                      <span className="icon">
                          <FaLinkedin />
                      </span>
                    </a>
                </div>                
            </ContentWrapper>
        </footer>
    );
};

export default Footer;