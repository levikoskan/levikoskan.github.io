import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer"

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;


    return (
      <div className="container" >
        {this.props.children}
      </div>
    );
  }
}
