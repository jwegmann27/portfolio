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
      backgroundColor: "#000000",
      height: "100vh",
      width: "100%",
      filter: "grayscale(1)",
    };
    return (
      <div className="upper-wrap">
        <div style={bgImgStyle} className="upper-full-image"></div>
        <div className="upper-content">
          <h1>Why, Hello There</h1>
          <h2>Please Make Yourself at Home</h2>
        </div>
      </div>
    )
  }
}

export default Upper;
