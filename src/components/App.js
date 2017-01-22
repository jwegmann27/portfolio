import React from 'react';
import Upper from './Upper';
import Description from './Description';
import Projects from './Projects';
import Tech from './Tech';
import Contact from './Contact';


class App extends React.Component {
  render() {
    return (
      <div>
        <Upper />
        <Description />
        <Projects />
        <Tech />
        <Contact />
      </div>
    )
  }
}


export default App;
