import React, { Component } from "react";
import AshAvatar from "../ashavatar/AshAvatar.js";
import SkillsMenu from "./SkillsMenu.js";

export default class Skills extends Component {
  render() {
    return (
      <>
        <AshAvatar page="skills" />
        <SkillsMenu />
      </>
    );
  }
}
