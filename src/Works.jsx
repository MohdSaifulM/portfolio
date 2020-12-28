import React from 'react';
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import avoid from './images/avoid-the-virus.png';
import cat1 from './images/Catmeownity.png';
import cat2 from './images/Catmeownity2.png';
import go1 from './images/goHalal.png';
import go2 from './images/goHalal2.png'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function Works() {

    useEffect(() => {

        let sidenav = document.querySelector('.sidenav');
        M.Sidenav.getInstance(sidenav, {}).close();

        let collapse = document.querySelector('.collapsible');
        M.Collapsible.init(collapse, {});

        document.getElementById("works").addEventListener("click", function(){
            let sidenav = document.querySelector('.sidenav');
            M.Sidenav.getInstance(sidenav, {}).close();
        })

    }, [])

    const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

    return (
        <div className="container">
            <div className="divider"></div>
            {isMobile ? <h5 className="title blue-grey-text text-lighten-2 animate__animated animate__fadeInLeft center-align">Works</h5> : <h4 className="title blue-grey-text text-lighten-2 animate__animated animate__fadeInLeft center-align">Works</h4> } 
            <ul className="collapsible popout animate__animated animate__fadeInLeft">
                <li>
                    <div className="collapsible-header hoverable"><h5 className="works-title light-blue-text text-accent-4">Avoid the virus!</h5></div>
                    <div className="collapsible-body">
                        <div className="row">
                            <div className="col s12 m6">
                                <img src={avoid} alt="img" id="rcorners2" className="center works-images"/>
                            </div>
                            <div className="col s12 m6">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className="grey-text text-darken-4 works-description-title">Description: </td>
                                        <td className="grey-text text-darken-4 works-description">First project I worked on during my coding bootcamp at General Assembly. Two weeks into the course, we had to build a simple game using whatever we have learnt so far. <br/> <br/> Since it was the pandemic period, I decided to go this to put some positive humour in an already serious situation. <br/> <br/> The objective of the game is just to avoid the virus that spawns randomly for as long as you can. Once player hits the virus, the game is over. <br/> <br/> I also added a power up in a form of hand sanitizer so that when you gain the power up some of the virus will disappear making it a bit easier to survive.</td>
                                    </tr>
                                    <tr>
                                        <td className="grey-text text-darken-4 works-description-title">Tech used: </td>
                                        <td className="grey-text text-darken-4 works-description">Vanilla JavaScript | HTML | CSS </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <a href="https://git.generalassemb.ly/mohdsaiful/avoid_the_virus">Github</a>
                                </div>
                                    <a href="https://pages.git.generalassemb.ly/mohdsaiful/avoid_the_virus/">Live URL</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header hoverable"><h5 className="works-title light-blue-text text-accent-4">Catmeownity</h5></div>
                    <div className="collapsible-body">
                    <div className="row">
                        <div className="col s12 m6">
                            <img src={cat1} alt="img" className="center works-images"/>
                            <img src={cat2} alt="img" className="center works-images"/>
                        </div>
                            <div className="col s12 m6">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className="grey-text text-darken-4 works-description-title">Description: </td>
                                        <td className="grey-text text-darken-4 works-description">Worked in a group for this project. We decided to give our furry friends a chance in the limelight and developed Catmeownity. <br/><br/> In this app, you can add your community cats to the site to share the joy they bring with your neighbours. Track your favourite cats and help the cat-community by adding their feeding times, and alerting others that they are missing. <br/><br/> You can also choose to leave your descriptions for the cats so others will know what our furry friends are like! <br/><br/> For this specific project, I concentrated more on the back-end development using MongoDB with Node.js and Express.js</td>
                                    </tr>
                                    <tr>
                                        <td className="grey-text text-darken-4 works-description-title">Tech used: </td>
                                        <td className="grey-text text-darken-4 works-description">MERN Stack</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <a href="https://git.generalassemb.ly/ryhuz/catmeownity">Github</a>
                                </div>
                                    <a href="https://catmeownity.herokuapp.com/app/">Live URL</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header hoverable"><h5 className="works-title light-blue-text text-accent-4">goHalal</h5></div>
                    <div className="collapsible-body">
                    <div className="row">
                        <div className="col s12 m6">
                            <img src={go1} alt="img" className="center works-images"/>
                            <img src={go2} alt="img" className="center works-images"/>
                        </div>
                            <div className="col s12 m6">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className="grey-text text-darken-4 works-description-title">Description: </td>
                                        <td className="grey-text text-darken-4 works-description">Worked in a group for this project. My main role for this is back-end development again as I was excited to use Django REST framework and write Python syntax. <br/><br/> We really wanted to tackle a problem that we faced almost every other day where we are not quite sure where to find good halal food when we're outside. Using this app, we can find halal restaurants that are closest to us using google API and also we can search for restaurants using an address. After which we can share our dining experience in the restaurant by dropping a comment/feedback together with ratings. <br/><br/> We are currently still working on this project as we are thrilled to add more features into this and we envisioned it to be the next halal dining ecosystem in Singapore.</td>
                                    </tr>
                                    <tr>
                                        <td className="grey-text text-darken-4 works-description-title">Tech used: </td>
                                        <td className="grey-text text-darken-4 works-description">Django REST framework | PostgreSQL | React.js </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <a href="https://git.generalassemb.ly/hfzgfr/halalfoodfinder">Github</a>
                                </div>
                                    <a href="https://gohalalsg.herokuapp.com/">Live URL</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="spacer">
            </div>
        </div>
    )
}

export default Works
