import React from 'react';


class Sidebar extends React.Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li><h1>JW</h1></li>
          <li><a className="strikeout" href="">Blog</a></li>
          <li><a href="">Resume</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    )
  }
}


export default Sidebar;
