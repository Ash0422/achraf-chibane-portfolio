import React, { Component } from "react";
import "../styles/skillsMenu.css";
import classNames from "classnames";
import Skills from "./DataSkills";
import IconOne from "../assets/iconOne.png"; // icon for "FRONTEND"
import IconTwo from "../assets/iconTwo.png"; // icon for "BACKEND"
import IconThree from "../assets/iconThree.png"; // icon for "DATABASE MANAGEMENT"
import IconFour from "../assets/iconFour.png"; // icon for "VERSION CONTROL"

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItems: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItems: menuItem + 1,
    });
  };

  renderContent = (Skills) => {
    return Skills.map((skill, index) => (
      <div
        key={index}
        className={`sub-skill-container-${this.state.activeMenuItems}`}
      >
        <h3>{skill.title}</h3>
        <div className="container-level">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                i < skill.level ? "filled" : "unfilled"
              }`}
            />
          ))}
        </div>
      </div>
    ));
  };

  render() {
    const { activeMenuItems } = this.state;
    const menuItems = [
      "FRONTEND",
      "BACKEND",
      "DATABASE MANAGEMENT",
      "VERSION CONTROL",
    ];

    // Define icons for each menu item
    const icons = [IconOne, IconTwo, IconThree, IconFour];

    // Get the current icon based on the active menu item
    const currentIcon = icons[activeMenuItems - 1]; // Subtract 1 to match the array index

    return (
      <div className="menu-skill">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={classNames("item-skill", {
              activeSkill: activeMenuItems === index + 1,
            })}
            onClick={() => this.handleMenuItemClick(index)}
          >
            <h2 className="skill-title">{item}</h2>
          </div>
        ))}
        <img className="icon-skill" src={currentIcon} alt="current-skill" />
        <div className="sub-skill-container">
          {this.renderContent(Skills[activeMenuItems])}
        </div>
      </div>
    );
  }
}
