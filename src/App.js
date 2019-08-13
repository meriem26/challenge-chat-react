import React from "react";
import DisplayMessges from "./DisplayMessages";
import LatestMessages from "./LatestMessages";

import "./App.css";
import NewMessage from "./NewMessage";

class App extends React.Component {
  render() {
    return (
    <div className="App" >
      <h1>CYF-Chat</h1>
      
      <LatestMessages/>
      <DisplayMessges/>
      <NewMessage/>

    </div>);
  }
}

export default App;
