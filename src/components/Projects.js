import React from 'react';

class Projects extends React.Component {
  constructor() {
    super();
    this.renderProjects = this.renderProjects.bind(this);
  }
  renderProjects(key) {
    const project = this.props.projectInfo[key];

    var style = {
      backgroundImage: "url('" + project.image + "')"
    };

    return(
      <div className="project" key={key}>
        <a target="_blank" href={project.link}>
          <div className="project-img" style={style}></div>
        </a>
        <div className="project-info">
          <h2>{project.name}</h2>
          <p>{project.desc}</p>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="project-section">
        <h1>Projects</h1>
        <div className="projects-wrap">
          {Object.keys(this.props.projectInfo).map(this.renderProjects)}
        </div>
      </div>
    )
  }
}

Projects.propTypes = {
  projectInfo: React.PropTypes.object.isRequired
};

export default Projects;
