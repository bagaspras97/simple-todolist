import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: "",
      items: [],
      writeTodo: "write todo here(max 5)"
    };
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleChange = e => {
    this.setState({
      todoItem: e.target.value
    });

    console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const items = this.state.items;
    if (items.length <= 4) {
      this.setState({
        items: [...this.state.items, this.state.todoItem],
        todoItem: ""
      });
    } else {
      this.setState({
        todoItem: "",
        writeTodo: "your todos already max"
      });
    }
    console.log("tambah");
    console.log(items.length);
  };

  handleRemove = () => {
    this.setState({
      items: [],
      writeTodo: "write todo here(max 5)"
    });
    console.log(this.state.writeTodo);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={this.state.todoItem}
              placeholder={this.state.writeTodo}
            />
            <button>add</button>
          </form>

          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <button
            value={this.state.items}
            onClick={this.handleRemove}
            style={{ margin: 5 }}
          >
            delete
          </button>
        </header>
      </div>
    );
  }
}

export default App;
