import React from 'react';


class Projects extends React.Component {
  constructor() {
    super();
    this.renderProjects = this.renderProjects.bind(this);
  }
  renderProjects(key) {
    const project = this.props.projectInfo[key];
    return(
      //When I come back to this I will add if cat is work do this if cat is personal do this.
      <div className="project" key={key}>
        <h2>{project.name}</h2>
        <img src={project.image} alt="project img" />
        <p>{project.desc}</p>
      </div>
    )

  }
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div>{Object.keys(this.props.projectInfo).map(this.renderProjects)}</div>
      </div>
    )
  }
}

Projects.propTypes = {
  projectInfo: React.PropTypes.object.isRequired
};

export default Projects;
