import React, { Component } from "react";
import AboutMenuItems from "./AboutMenuItems.js";
import AboutHeadingSub from "./AboutHeadingSub.js";
import DataHeadingSub from "./DataHeadingSub.js";
import iconPersonal from "../assets/personal-me.png";
import iconEducation from "../assets/education.png";
import iconCareers from "../assets/careers.png";

export default class AboutMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItems: 1,
      activeHeadingSub: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItems: menuItem,
      activeHeadingSub: 1,
    });
  };

  handleHeadingSubClick = (subheading) => {
    this.setState({
      activeHeadingSub: subheading,
    });
  };

  render() {
    const { activeMenuItems, activeHeadingSub } = this.state;
    const menuItems = ["PERSONAL", "EDUCATION", "CAREERS"];
    const activeMenuTitle = menuItems[activeMenuItems - 1];
    const activeMenuIcon =
      activeMenuTitle === "PERSONAL"
        ? iconPersonal
        : activeMenuTitle === "EDUCATION"
        ? iconEducation
        : iconCareers;
    const subheadings = DataHeadingSub[activeMenuItems];

    return (
      <>
        <div className="menu">
          {menuItems.map((item, index) => (
            <AboutMenuItems
              key={index}
              title={item}
              active={activeMenuItems === index + 1}
              onClick={() => this.handleMenuItemClick(index + 1)}
            />
          ))}
        </div>
        <div className="container-sub">
          <div className="container-sub-title">
            <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
            <h3>{activeMenuTitle}</h3>
          </div>
          {subheadings.map((subheading, index) => (
            <AboutHeadingSub
              key={index}
              title={subheading.title}
              content={subheading.content}
              active={activeHeadingSub === index + 1}
              onClick={() => this.handleHeadingSubClick(index + 1)}
              menuItem={activeMenuItems}
            />
          ))}
        </div>
      </>
    );
  }
}
