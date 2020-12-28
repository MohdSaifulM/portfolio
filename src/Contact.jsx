import React from 'react'
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function Contact() {

    useEffect(() => {

        let sidenav = document.querySelector('.sidenav');
        M.Sidenav.getInstance(sidenav, {}).close();

        document.getElementById("contact").addEventListener("click", function(){
            let sidenav = document.querySelector('.sidenav');
            M.Sidenav.getInstance(sidenav, {}).close();
        })

    }, [])

    const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

    return (
        <div className="container">
            <div className="divider"></div>
            {isMobile ? <h5 className="title blue-grey-text text-lighten-2 animate__animated animate__fadeInLeft">Contact</h5> : <h4 className="title blue-grey-text text-lighten-2 animate__animated animate__fadeInLeft">Contact</h4> }
            {isMobile ? <p className="animate__animated animate__fadeInLeft body" id="mobile-about-me">I am always open for discussions and keen to make new connections. <br/> Feel free to contact me at my <a href="mailto:mohd.saiful@live.com">email</a> or connect with me on my <a href="https://www.linkedin.com/in/mohammad-saiful-bin-mohammad/"> LinkedIn </a>. </p> : <p className="animate__animated animate__fadeInLeft body flow-text">I am always open for discussions and keen to make new connections. <br/> Feel free to contact me at my <a href="mailto:mohd.saiful@live.com">email</a> or connect with me on my <a href="https://www.linkedin.com/in/mohammad-saiful-bin-mohammad/"> LinkedIn </a>.</p> } 
        </div>
    )
}

export default Contact
