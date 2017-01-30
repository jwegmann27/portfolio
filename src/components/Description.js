import React from 'react';


class Description extends React.Component {
  constructor() {
    super();
    this.renderStats = this.renderStats.bind(this);

    this.state = {
        name: "Joseph Wegmann",
        image: "http://fillmurray.com/300/350",
        attributes: ["Coachable", "Eager to try new things", "Self-Motivated"],
        interests: ["Web Development","PC Games", "Fantasy Novels", "Cooking"],
        skills: ["SASS/CSS","WordPress","JavaScript","Jquery","React"],
        weaknesses: ["Fire", "Poison", "Adorable Cats", "Falling From Great Heights"]
    };
  }
  //I probably could have broken this up more. Perhaps I will but for now it is ok.
  renderStats() {
    const stats = this.state;
    return (
      <div className="stats-section">
        <div className="stats-image"><img src={stats.image} alt="me"/></div>
        <div className="stats-main">
          <h2>{this.state.name}</h2>
          <div className="bar-wrap">
            <p>Health</p>
            <div className="health-bar">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>1000HP/1000HP</span>
            </div>
          </div>
          <div className="bar-wrap">
            <p>Mana</p>
            <div className="mana-bar">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>450HP/450HP</span>
            </div>
          </div>
          <div className="stats-list">
            <p>Attributes</p>
            <ul>
              {stats.attributes.map(function(attribute, index) {
                return <li className='attribute' key={index}>{attribute}</li>;
              })}
            </ul>
          </div>
          <div className="stats-list">
            <p>Interests</p>
            <ul>
              {stats.interests.map(function(interest, index) {
                return <li className='interest' key={index}>{interest}</li>;
              })}
            </ul>
          </div>
          <div className="stats-list">
            <p>Skills</p>
            <ul>
              {stats.skills.map(function(skill, index) {
                return <li className='skill' key={index}>{skill}</li>;
              })}
            </ul>
          </div>
          <div className="stats-list">
            <p>Weak Against</p>
            <ul>
              {stats.weaknesses.map(function(weak, index) {
                return <li className='weak' key={index}>{weak}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="description-section">
        {this.renderStats()}
      </div>
    )
  }
}


export default Description;
