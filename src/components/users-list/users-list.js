import React, { Component } from "react";

class UsersView extends Component {
  cachedHandlers = {};

  Yurii = id => {
    if (!this.cachedHandlers[id]) {
      this.cachedHandlers[id] = () => this.props.deleteUser(id);
    }
    return this.cachedHandlers[id];
  };

  render() {
    const { usersList } = this.props;
    return (
      <ul>
        {usersList.map(user => {
          return (
            <li key={user.login.uuid}>
              <span>{user.gender}</span>
              <button onClick={this.Yurii(user.login.uuid)}>delete</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default UsersView;
