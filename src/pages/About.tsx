import Card from "../components/Card";
import NavigationBar from "../layouts/NavigationBar";

const About = () => {
    return (
        <>
            <NavigationBar /> 
            <div className="section">
                <div className="section section-about">
                    <div className="about">
                        <figure className="about__shape">
                            <img src="src\assets\avatar.png" alt="" className="about__img" />
                            <figcaption className="about__caption">Saif</figcaption>
                        </figure>
                        <div className="about__text">
                            <h3>About Me</h3>
                            <p>Passionate, discerning and focused with an industrial automation background. Seeking fulfilment through bettering lives and progressively delivering solutions & convenience as a software engineer</p>
                        </div>
                    </div>
                </div>
                <div className="section section-skills">
                    <Card />
                </div>
            </div>
        </>
    );
};

export default About;
