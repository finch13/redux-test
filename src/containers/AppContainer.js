// import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { copyText } from "../actions/actions.index";

import AppView from "../components/App";

function mapStateToProps(state) {
  console.log("state >>>", state);
  return {
    buttonText: state.copyText.text,
    changeTime: state.changeTime.time
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ copyText }, dispatch);
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView);

export default AppContainer;
