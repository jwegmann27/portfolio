import React from 'react';


class Upper extends React.Component {
  render() {
    const bgImg = require('../css/images/test-bg-upper.jpg');

    const bgImgStyle = {
      background: 'url(' + bgImg + ')',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundColor: "#e1e1e1",
      height: "100vh",
      width: "100%",
    };
    return (
      <div className="upper-wrap">
        <div style={bgImgStyle} className="upper-full-image"></div>
        <div className="upper-content">
          <h1>They're robots Morty! It's okay to shoot them! They're just robots!</h1>
          <h1>It's a figure of speech, Morty. They're bureaucrats. I don't respect them. Just keep shooting, Morty. You have no idea what prison is like here!</h1>
        </div>
      </div>
    )
  }
}


export default Upper;
