import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div className="messageHeader">
        {this.props.content.name}: {this.props.content.text}{" "}
        {this.props.content.time ? (
          <h6>{this.props.content.time}</h6>
        ) : (
          <h6>Old</h6>
        )}
        <button onClick={this.props.onClick}>Delete</button>
      </div>
    );
  }
}
export default Message;
