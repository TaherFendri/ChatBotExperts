import React, { Component } from "react";

class facial extends Component {
  render(){
    return (
      <div>
        <meta name="viewport" content="initial-scale=1" />
        <title>face-detection-node-opencv</title>
        <link rel="stylesheet" type="text/css" href="/styles.css" />
        <div className="container center">
          <canvas id="canvas-video" width={640} height={480} />
        </div>
      </div>
    );
  }
};

export default facial;