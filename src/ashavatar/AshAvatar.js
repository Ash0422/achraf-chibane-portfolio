import React from "react";
import PropTypes from "prop-types";
import AshImage from "../assets/ash-avatar7.png";
import "../styles/ashAvatar.css";

const AshAvatar = ({ page }) => {
  const ashClass = `ashavatar ${page}`;
  const spanClass = `shadow-over-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={AshImage} className={ashClass} alt="Ash avatar" />
    </>
  );
};

AshAvatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default AshAvatar;
