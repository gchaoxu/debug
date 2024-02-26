import logo from "./logo.svg";
import "./App.css";
import React from "react";

class Test extends React.Component {
  state = {
    name: "zs",
    num: 3,
  };

  render() {
    const { name, num } = this.state;
    if (num < 4 && name) {
      this.setState({
        name: `lisi-${Date.now()}`,
      });
    }
    return <div>这是 test 组件</div>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
