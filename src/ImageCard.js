import React from "react";

class ImageCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="card"
          className="card"
          onClick={() => this.props.whenClicked()}
        >
          <div className="image">
            <img
              src={this.props.image[this.props.name]}
              alt={this.props.name}
            />
          </div>
          <div className="extra">{this.props.name}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ImageCard;
