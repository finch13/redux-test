import React, { Component } from "react";
import "./App.css";

import UsersView from "./users-list/users-list";
import Counter from "./counter/counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handlerClick = e => {
    // console.log("this.refs >>", this.input);
    this.props.copyText(this.input.current.value);
  };

  onGetUsersClick = e => {
    console.log("onGetUsersClick >>>", this.props);
    this.props.retrieveUsers();
  };

  render() {
    console.log("object >>>", this.props);
    const { buttonText, changeTime, finchsUsers, deleteUser } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <p>{buttonText.toString()}</p>
            <p>Chnage Time: {changeTime.toString()}</p>
            <input type="text" ref={this.input} />
            <button onClick={this.handlerClick}>test click</button>
            <div>
              <button onClick={this.onGetUsersClick}>Get Users</button>
            </div>
          </div>
        </header>
        <div className="users-list">
          <UsersView usersList={finchsUsers} deleteUser={deleteUser} />
        </div>
        <div className="counter-view">
          <Counter>
            {({ count }) => {
              return (
                <div>
                  <h1>The count is: {count}</h1>
                </div>
              );
            }}
          </Counter>
        </div>
      </div>
    );
  }
}

export default App;
