import React from 'react';
import Upper from './Upper';
//import Description from './Description';
import Projects from './Projects';
//import Contact from './Contact';
//import Sidebar from './Sidebar';
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
        <div className="hide-contact-wrap">
          <Upper />
          <div className="main">
            <Projects projectInfo={this.state.projects} />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
