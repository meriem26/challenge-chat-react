import React from "react";

class UpdateMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      editedMessage: {}
    };
  }

  static getDerivedStateFromProps(props, prevState) {
    if (prevState.editedMessage.id !== props.content.id) {
      return {
        editedMessage: props.content
      };
    } else {
      return prevState;
    }
  }

  handleChange = ev => {
    const newText = ev.target.value;
    this.setState(prevState => ({
      editedMessage: {
        ...prevState.editedMessage,
        text: newText
      }
    }));
    console.log(this.state.editedMessage.text);
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.editedMessage.text}
        />
        <button
          onClick={() => this.props.onSave(this.state.editedMessage)}
          value={this.state.editedMessage.text}
        >
          Save
        </button>
      </div>
    );
  }
}

export default UpdateMessage;
