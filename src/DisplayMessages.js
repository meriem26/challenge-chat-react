import React from "react";
import UpdateMessage from "./UpdateMessage";
import Message from "./Message";
class DisplayMessages extends React.Component {
  constructor() {
    super();
    this.state = {
      message: [],
      messageToEdit: null
    };
  }

  componentDidMount() {
    setInterval(this.displaymsg, 800);

  }
  displaymsg = () => {
    fetch("http://localhost:3004/message")
      .then(res => res.json())
      .then(data =>
        this.setState({
          message: data
        })
      );
  };
  handleDeleteClick = id => {
    console.log(id);

    fetch(`http://localhost:3004/deleteMessage/${id}`, {
      method: "DELETE"
    });
  };
  handleUpdateClick = (msg)=> {
    console.log(msg);

    fetch(`http://localhost:3004/message?id=${msg.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json;charset=UTF-8"
      },
      mode:'cors',
      body: JSON.stringify({ text: msg.text })
    })
      .then(res => {
        return res.json();
      }).then(json=>{ console.log(json)
        this.setState({
          messageToEdit: json
        })
      })
      .catch(err => err);
  };
  
  displayUpdateMessage = (content, index) => {
    // const newMessages = [...this.state.message]
    // newMessages[index].editMode = true
    this.setState({ messageToEdit: content })
  }
  render() {
    return (
      <div className="containerMessage">
        {this.state.message.map((content, index) => {
          return (
            <div key={content.id}>
              <Message
               
                content={content}
                onClick={() => this.handleDeleteClick(content.id)}
              />
            
              <button onClick={() => this.displayUpdateMessage(content, index)}>Edit</button>
                {/* <UpdateMessage
                content={content}
                onClick={() => this.displayInput(content.id,content.text)}
              /> */}
            </div>
          );
        })}
          {this.state.messageToEdit ? <UpdateMessage onSave={this.handleUpdateClick} content={this.state.messageToEdit}
              /> : null}
      </div>
    );
  }
}
export default DisplayMessages;
