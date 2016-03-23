import React from "react";


export default class Footer extends React.Component {
  render() {
    const path = './public/images/links/'

    return (
      <footer >
            <div className="bottomBar">
              <a href="https://github.com/levikoskan"><img className="linkIcon" src={path +"github.png"}/></a>
              <a href="https://www.linkedin.com/in/levikoskan"><img className="linkIcon" src={path +"linkedin.png"}/></a>
              <a href="https://about.me/levikoskan"><img className="linkIcon" src={path +"aboutMe.png"}/></a>
            </div>
      </footer>
    );
  }
}
