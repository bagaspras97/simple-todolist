import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: "",
      items: []
    };
  }
  handleChange = e => {
    this.setState({
      todoItem: e.target.value
    });

    console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: ""
    });
    console.log("tambah");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.todoItem} />
            <button>add</button>
          </form>

          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
