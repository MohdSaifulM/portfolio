import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const NavigationBar = () => {
    return (
        <div className="menu">
            <nav className="menu__nav">
                <ul className="menu__list">
                    <li className="menu__item"><Link to="/about" className="menu__link">About</Link></li>
                    <li className="menu__item"><Link to="/contact" className="menu__link">Contact</Link></li>
                    <li className="menu__item"><Link to="/journey" className="menu__link">Journey</Link></li>
                    <li className="menu__item"><Link to="/projects" className="menu__link">Projects</Link></li>
                </ul>
            </nav>
            <div className="menu__arrow">
                <Player
                    autoplay
                    loop
                    src="src\assets\arrow_hover.json"
                >
                </Player>
            </div>
        </div>
    );
};

export default NavigationBar;
