import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rotate: 1};
  }

  change = () => {
    this.setState((state) => ({rotate: -1*state.rotate}));
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
        {this.state.rotate===1 ? <img id="logo" src={logo} className="App-logo" alt="logo" />:<img id="logo" src={logo} className="App-logo-reverse" alt="logo" />}
        <p>B06901032 吳兩原</p>
        <button id="change" className="button" onClick={this.change}>{this.state.rotate===1 ? "不戴口罩":"戴口罩"}</button>
        <a>
          {this.state.rotate===1?"順時中":"逆時中"}
        </a>
        </header>
      </div>
    )
    

    
  }
}





export default App;
