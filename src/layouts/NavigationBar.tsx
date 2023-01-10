const NavigationBar = () => {
    return (
        <div className="menu">
            <nav className="menu__nav">
                <ul className="menu__list">
                    <li className="menu__item"><a href="#" className="menu__link">About</a></li>
                    <li className="menu__item"><a href="#" className="menu__link">Contact</a></li>
                    <li className="menu__item"><a href="#" className="menu__link">Journey</a></li>
                    <li className="menu__item"><a href="#" className="menu__link">Projects</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationBar;
