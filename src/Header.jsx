import React from 'react'
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import { NavLink } from "react-router-dom";
import git from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function Header() {

    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }, [])

    const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

    return (
        <div>
            <header>
                <div>
                <ul id="slide-out" className="sidenav">
                    <li>
                    <div className="user-view">
                        <div className="background blue-grey"></div>
                        <img
                        className="white-text circle nav-image"
                        src="https://i.ibb.co/37hxJ5K/IMG-7126.png"
                        />
                        <span className="white-text name">
                        Mohammad Saiful Bin Mohammad
                        </span>
                        <a href="mailto:mohd.saiful@live.com">
                            <span className="white-text email">mohd.saiful@live.com</span>
                        </a>
                    </div>
                    </li>
                    <li>
                        <NavLink className="hoverable" to="/about" id="about-me">
                            About me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="hoverable" to="/works" id="works">
                            Works
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="hoverable" to="/contact" id="contact">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="hoverable" to="/joke" id="joke">
                            <i className="small material-icons grey-text text-darken-4">face</i>
                        </NavLink>
                    </li>
                </ul>
                <a
                    href="#"
                    data-target="slide-out"
                    className="sidenav-trigger"
                    id="always-display"
                >
                <i className="small material-icons grey-text text-darken-4 nav-icon">
                    menu
                </i>
                </a>
                <div className="center-align">
                    <img
                    className="white-text circle jumbo-image"
                    src="https://i.ibb.co/M1fsMyN/459daf28473792f6f54473733d87dfb2-sticker.png"
                    />
                </div>
                {isMobile ? <h3 className="greeting center-align blue-grey-text text-lighten-2 animate__animated animate__fadeInUp">
                    Hello World <br></br> I'm <strong className="my-name">Saiful</strong>.
                </h3> : <h1 className="greeting center-align blue-grey-text text-lighten-2 animate__animated animate__fadeInUp">
                    Hello World <br></br> I'm <strong className="my-name">Saiful</strong>.
                </h1> }
                </div>
            </header>
            <main></main>
            <footer className="page-footer blue-grey lighten-2">
                <div className="footer-copyright">
                    <div className="container grey-text text-darken-4">
                        <div className="right">
                            <a href="https://git.generalassemb.ly/mohdsaiful" className="footer-icons"><img src={git} alt="github" srcSet={git} style={{height: "20px"}}/></a>
                            <a href="https://www.linkedin.com/in/mohammad-saiful-bin-mohammad/" className="footer-icons"><img src={linkedin} alt="linkedin" srcSet={linkedin} style={{height: "20px"}}/></a>
                        </div>
                        <strong className="left">
                            © 2020 Copyright All rights reserved
                        </strong>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Header
