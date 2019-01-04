import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handlerClick = e => {
    console.log("this.refs >>", this.input);
    this.props.copyText(this.input.current.value);
  };

  render() {
    console.log("object >>>", this.props);
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <p>{this.props.buttonText}</p>
            <p>Chnage Time: {this.props.changeTime.toString()}</p>
            <input type="text" ref={this.input} />
            <button onClick={this.handlerClick}>test click</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
