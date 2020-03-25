import React from "react";
import {connect} from "react-redux";
import {store} from "../store";

const ErrorMessage = ({ error }) => (
    <React.Fragment>{error && <div>{error.message}</div>}</React.Fragment>
);

export default connect(store => ({error: store.error}))(ErrorMessage);