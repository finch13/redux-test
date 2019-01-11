// import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { copyText, retrieveUsers, deleteUser } from "../actions/actions.index";

import AppView from "../components/App";

function mapStateToProps(state) {
  console.log("state from mapStateToProps >>>", state);
  return {
    buttonText: state.copyText.text,
    changeTime: state.changeTime.time,
    finchsUsers: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ copyText, retrieveUsers, deleteUser }, dispatch);
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView);

export default AppContainer;
