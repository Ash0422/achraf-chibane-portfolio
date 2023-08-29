import React from "react";
import classNames from "classnames";
import "../styles/aboutMenu.css";
const AboutHeadingSub = ({ title, content, active, onClick, menuItem }) => {
  const containerSubClass = `container-sub-${menuItem}`;
  return (
    <div
      className={classNames(containerSubClass, { "active-subheading": active })}
    >
      <h3 onClick={onClick}>{title}</h3>
      <div className="container-p">{content}</div>
    </div>
  );
};

export default AboutHeadingSub;
