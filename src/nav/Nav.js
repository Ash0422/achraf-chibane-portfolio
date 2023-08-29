// import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import aboutMe from "../assets/about-me.png";
import skills from "../assets/skills.png";
import projects from "../assets/my-projects.png";
import contactMe from "../assets/contactMe.png";
import "../styles/nav.css";

export default function Nav() {
  const page = useLocation();
  const getNavPositionClass = () => {
    switch (page.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (page.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const currentPage = (navClass) => {
    return navClass === navPositionClass;
  };
  const navRenderLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = currentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";
    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };
  return (
    
    <nav className={`nav ${navPositionClass}`}>
      {navRenderLink("/", aboutMe, "about me icon", "nav-about")}
      {navRenderLink("/skills", skills, "skills icon", "nav-skills")}
      {navRenderLink("/projects", projects, "projects icon", "nav-projects")}
      {navRenderLink("/contact", contactMe, "contact Me icon", "nav-contact")}
    </nav>
  );
}
