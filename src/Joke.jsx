import React from 'react'
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import Axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function Joke() {

    const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
    const [joke, setJoke] = useState([])

    useEffect(() => {
        fetchJoke();
        let sidenav = document.querySelector('.sidenav');
        M.Sidenav.getInstance(sidenav, {}).close();

        document.getElementById("contact").addEventListener("click", function(){
            let sidenav = document.querySelector('.sidenav');
            M.Sidenav.getInstance(sidenav, {}).close();
        })

    }, [])

    async function fetchJoke() {
        try {
            let res = await Axios.get("https://icanhazdadjoke.com/", {
                headers: {
                    'Accept': "application/json"
                }
            });
            setJoke(res.data.joke)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="divider"></div>
            {isMobile ? <h5 className="title blue-grey-text text-lighten-2 animate__animated animate__fadeInLeft">Random Dad Jokes</h5> : <h4 className="title blue-grey-text text-lighten-2 animate__animated animate__fadeInLeft">Random Dad Jokes</h4> }
            {isMobile ? <p className="animate__animated animate__fadeInLeft body" id="mobile-about-me">{joke}</p> : <p className="animate__animated animate__fadeInLeft body flow-text">{joke}</p> } 
        </div>
    )
}

export default Joke
