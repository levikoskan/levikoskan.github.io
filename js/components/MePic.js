import React from "react";


export default class Me extends React.Component {
   constructor() {
    super();

    this.state = {
        submitted: true
      }
  }

  newState() {
    this.setState({
      submitted: !this.state.submitted
    });

  }
  render() {

    if (this.state.submitted){
      return(
      <div>
        <img className="aboutMeImg" onClick={this.newState.bind(this)} src={this.props.pic}/>
      </div>
      );
    }else{
      return(
        <div className="aboutMeImgText" onClick={this.newState.bind(this)}>
          <p>{this.props.info}</p>
        </div>
      );
    }
  }
}
