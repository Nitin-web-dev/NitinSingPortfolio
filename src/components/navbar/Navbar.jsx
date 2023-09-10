import React from "react";
import "./Navbar.css";
import cv from "../../assets/cv/NITIN PAL SINGH.pdf";
const Navbar = () => {
  const scrollSection = (sectionID) => {
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openCVInNewTab = () => {
    window.open(cv, "_blank");
  };

  return (
    <header>
      <button data-text="Awesome" className="button">
        <span className="actual-text">&nbsp;NITIN SINGH&nbsp;</span>
        <span className="hover-text" aria-hidden="true">
         web developer
        </span>
      </button>

      <nav>
        <ul>
          <li>
            <button className="nav-links" onClick={() => scrollSection("home")}>
              Home
            </button>
          </li>
          <li>
            <button
              className="nav-links"
              onClick={() => scrollSection("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="nav-links"
              onClick={() => scrollSection("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className="nav-links"
              onClick={() => scrollSection("project")}
            >
              Project
            </button>
          </li>
          <li>
            <button
              className="nav-links"
              onClick={() => scrollSection("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <div className="cvLink">
        <a href="/" onClick={openCVInNewTab}>
          View CV
        </a>
      </div>
    </header>
  );
};

export default Navbar;
