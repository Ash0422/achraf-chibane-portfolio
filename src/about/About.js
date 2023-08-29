import React, { Component } from "react";
import AshAvatar from "../ashavatar/AshAvatar.js";
import AboutMenu from "./AboutMenu.js";

export default class About extends Component {
  render() {
    return (
      <>
        <AshAvatar page="about" />
        <AboutMenu />
      </>
    );
  }
}
