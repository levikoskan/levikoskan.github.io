import React from "react";

import { IndexLink, Link } from "react-router";

import Me from "../components/MePic"


export default class AboutMe extends React.Component {
  constructor(props) {
    super();
  }
  componentWillMount(){
      document.body.setAttribute("class", "aboutBackGround");
    }


  render() {
    const path = '../../public/images/levi/'
    const levi =[
      { pic: path +'utahSt.jpg',
        info: 'I grew up in the beautiful mountains of Cache Valley. I stayed in the valley when I decided to pursue higher education at Utah State University. I graduated with a B.S. in Psychology.',},
      { pic:path +'leviLex.png',
        info: 'This is my wife Lexie. We laugh a lot. When I start nerding out too much she brings be back. We got married on June 13th, 2015. She is the best teammate and friend. She does not enjoy listening to me talk about code. I do it anyways.',},
      { pic: path +'football.jpg',
        info: 'I got the chance to walk-on to USU’s football team. After two years I earned a scholarship. By the end of my football career I had received all conference honors, been nominated for national awards, and been elected to the leadership committee by my peers.',},
      { pic: path +'friends.jpg',
        info: 'I value relationships above all else. My favorite thing to do is just hangout and goof around with the good people I call my friends.',},
      { pic:path +'golf.jpg',
        info: 'I play golf because I love to play games. Golf just makes it easy to drink refreshing beverages and hangout with friends. I love all games though. Sports, board games, card games, video games, and anything else anyone wants to compete at. They’re all fun, and all enjoyable.',},
      { pic:path +'cowboys.jpg',
      info: 'Football is really the only sport I watch consistently during the regular season. Cowboys are my team. The great thing about sports is that the team you root for is the community you are associated with. Cowboys have the best community, with the best fans, and a rich legacy.',}
    ]


    return (
      <div>
        <div className="aboutMeWrapper">
          <div className="aboutLeviTxtWrapper">
            <h1 className="">Why be a web developer?</h1>
            <p className="aboutLeviTxt">I have appreciation and fascination with technology and how it improves the human condition. I love puzzles and don’t know of a greater satisfaction than finding the solution to a hard, complex problem. I’ve always been the most excited when I’m involved with projects that others will get to use and interact with. The most exciting aspect of this career is that I can never learn it all. I love learning and throughout my whole career I will have to learn new technologies and continue my self-improvement.</p>
          </div>
        <div className="clickTxt">
          <h3> Click an image and read my story</h3>
        </div>
          {levi.map((levi, i) => {
            return(
              <div key={i} className="aboutMeImgWrapper">
                <Me pic={levi.pic} info={levi.info}/>
              </div>
            )
            }, this)
          }
        </div>
        <div id='aboutMeArrow'>
          <Link to="/" >
                <img src='../../public/images/leftArrow.png' />
          </Link>
        </div>
      </div>
    );
  }
}
