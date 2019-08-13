import React from "react";

class LatestMessages extends React.Component {
  constructor() {
    super();
    this.state = {
      latestMessages: []
    };
  }
  handleClick = () => {
    fetch("http://localhost:3004/message")
      .then(res => res.json())
      .then(data =>
        this.setState({
          latestMessages: data.slice(-10)
        })
      );
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>See Latest</button>
        {this.state.latestMessages.map(content => {
          return (
            <div className="messageHeader">
              {content.name}: {content.text}
            </div>
          );
        })}
      </div>
    );
  }
}
export default LatestMessages;
