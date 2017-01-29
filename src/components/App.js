import React from 'react';
import Upper from './Upper';
import Description from './Description';
import Projects from './Projects';
import Contact from './Contact';
import projectInfo from '../project-obj.js';


class App extends React.Component {
  constructor() {
    super();
    //set intial state
    this.state = {
      projects: projectInfo
    };
  }

  render() {
    return (
      <div>
        <Upper />
        <div className="grid">
          <Description />
          <Projects projectInfo={this.state.projects} />
          <Contact />
        </div>
      </div>
    )
  }
}


export default App;
