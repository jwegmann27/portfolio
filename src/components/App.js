import React from 'react';
import Upper from './Upper';
import Description from './Description';
import Projects from './Projects';
import Tech from './Tech';
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
        <Description />
        <Projects projectInfo={this.state.projects} />
        <Tech />
        <Contact />
      </div>
    )
  }
}


export default App;
