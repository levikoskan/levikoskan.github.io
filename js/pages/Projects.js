import React from "react";


import Project from "../components/Project";

export default class Projects extends React.Component {
  constructor(props) {
    super();
  };
  componentWillMount(){
      document.body.setAttribute("class", "projectsBackGround")
    }

  render() {


    return (
      <div className='projectContainer'>
        <div className='projectsTitle'>
          <h1>My Projects</h1>
        </div>
        <Project/>
      </div>

    );
  }
}
