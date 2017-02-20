import React from 'react';


class Sidebar extends React.Component {
  render() {
    return (
      <div className="side-bar">
        <img src="http://placekitten.com/75/75" alt="logo" />
        <ul>
          <li><a className="strikeout" href="">Blog</a></li>
          <li><a href="">Resume</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    )
  }
}


export default Sidebar;
