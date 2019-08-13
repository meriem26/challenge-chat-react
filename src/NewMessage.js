import React, { Component } from "react";

class NewMessage extends Component {
  constructor() {
    super();
    this.state = {
        message:{
      from: "",
      text: ""
    }};
  }
  handleSubmit = () => {
    fetch(`http://localhost:3004/message`,
      {
        method: "POST",
        body: JSON.stringify(this.state.message),
        headers: {"content-type": "application/json"}
      });
  };
  handleChange=(event)=>{
    console.log(
      this.state.message   );
    const newmsg= this.state.message;
    newmsg[event.target.name] = event.target.value;
      this.setState({
     message: newmsg
      });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="from" placeholder="from"onChange={this.handleChange} />
          <textarea name="text" placeholder="text" onChange={this.handleChange}/>
          <button >Add a message</button>
        </form>
      </div>
    );
  }
}

export default NewMessage;
