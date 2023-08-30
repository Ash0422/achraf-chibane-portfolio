import React, { Component } from "react";
import classNames from "classnames";
import projects from "./DataProjects";
import "../styles/projectMenu.css";

export default class MenuProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }

  handleProjectClick = (project) => {
    this.setState({ activeProject: project });
  };

  renderContent = (project) => {
    return project.map((project, index) => (
      <div key={index} className={`container-sub-project-${index + 1}`}>
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title} />
        <div>{project.description}</div>
        <div className="container-link">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            WEBSITE
          </a>
        </div>
      </div>
    ));
  };

  render() {
    const { activeProject } = this.state;
    const projectItems = ["Portfolio", "Civic Quiz Game", "Catch-Em-All"]; // Corrected project item names

    return (
      <div className="project-menu">
        <div className="container-project-items">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={classNames("item-project", {
                activeProject: activeProject === index + 1,
              })}
              onClick={() => {
                this.handleProjectClick(index + 1);
              }}
            >
              <h2 className="title">{item}</h2>
            </div>
          ))}
        </div>
        <div className="container-sub-project">
          {this.renderContent([projects[activeProject]])}
        </div>
      </div>
    );
  }
}
