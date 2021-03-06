import React from 'react'
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import front from './images/front-end.png';
import back from './images/back-end.png';
import lang from './images/database.png';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function About() {

    useEffect(() => {

        let sidenav = document.querySelector('.sidenav');
        M.Sidenav.getInstance(sidenav, {}).close();

        document.getElementById("about-me").addEventListener("click", function(){
            let sidenav = document.querySelector('.sidenav');
            M.Sidenav.getInstance(sidenav, {}).close();
        })

    }, [])

    const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

    const aboutMe = "Passionate, discerning and focused with an industrial automation background. I find excitement in coming up with solutions and bettering lives through progressively delivering convenience. As a full stack developer, I am engineered to serve and uplift today's greatest gift — the technology revolution."

    return (
        <div className="container">
            <div className="divider"></div>
            {isMobile ? <h5 className="title blue-grey-text text-lighten-2 animate__animated animate__fadeInLeft">About me</h5> : <h4 className="title blue-grey-text text-lighten-2 animate__animated animate__fadeInLeft">About me</h4> }
            {isMobile ? <p className="animate__animated animate__fadeInLeft body" id="mobile-about-me">{aboutMe}</p> : <p className="animate__animated animate__fadeInLeft body flow-text">{aboutMe}</p> } 
            {isMobile ? <h5 className="skills-title blue-grey-text text-lighten-2 animate__animated animate__fadeInLeft center-align">Skills</h5> : <h4 className="skills-title blue-grey-text text-lighten-2 animate__animated animate__fadeInLeft center-align">Skills</h4> }
            <div className="row container skill-cards">
                <div className="card hoverable animate__animated animate__fadeInLeft">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator skills-image" src={front} />
                    </div>
                    {!isMobile && <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4 center-align">Front-End</span>
                    </div> }
                    {isMobile ? <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4" id="mobile-ctitle">Front-End Development</span>
                        <p className="card-reveal-body" id="mobile-cbody">HTML5 | CSS3 & Sass | Bootstrap | jQuery | React.js</p>
                    </div> : <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Front-End Development<i className="material-icons right">close</i></span>
                        <p className="card-reveal-body">HTML5 | CSS3 & Sass | Bootstrap | jQuery | React.js</p>
                    </div> }
                </div>
                <div className="card hoverable animate__animated animate__fadeInLeft">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator skills-image" src={back} />
                    </div>
                    {!isMobile && <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4 center-align">Back-End</span> 
                    </div> }
                    {isMobile ? <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4" id="mobile-ctitle">Back-End Development</span>
                        <p className="card-reveal-body" id="mobile-cbody">Node.js | Express.js | Django | MongoDB | PostgreSQL</p>
                    </div> : <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Back-End Development<i className="material-icons right">close</i></span>
                        <p className="card-reveal-body">Node.js | Express.js | Django | MongoDB | PostgreSQL</p>
                    </div> }
                </div>
                <div className="card hoverable animate__animated animate__fadeInLeft">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator skills-image" src={lang} />
                    </div>
                    {!isMobile && <div className="card-content">
                         <span className="card-title activator grey-text text-darken-4 center-align">Languages</span>
                    </div> }
                    {isMobile ? <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4" id="mobile-ctitle">Languages</span>
                        <p className="card-reveal-body" id="mobile-cbody">Python | JavaScript</p>
                    </div> : <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Languages<i className="material-icons right">close</i></span>
                        <p className="card-reveal-body">Python | JavaScript</p>
                    </div> }
                </div>
            </div>
            <div className="spacer">
            </div>
        </div>
    )
}

export default About
