import Card from "../components/Card";
import NavigationBar from "../layouts/NavigationBar";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const About = () => {
    return (
        <>
            <NavigationBar />
            <div className="section">
                <div className="section section-about">
                    <div className="about">
                        <figure className="about__shape">
                            <img
                                src="src\assets\avatar.png"
                                alt=""
                                className="about__img"
                            />
                            <figcaption className="about__caption">
                                Saif
                            </figcaption>
                        </figure>
                        <div className="about__text">
                            <h3>About Me</h3>
                            <p>
                                Passionate, discerning and focused with an
                                industrial automation background. Seeking
                                fulfilment through bettering lives and
                                progressively delivering solutions & convenience
                                as a software engineer
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section section-skills">
                    <Card
                        title="Front-End Development"
                        paragraph="HTML5 | CSS3 & Sass | jQuery | React | Angular"
                        icon={ FaReact }
                    />
                    <Card
                        title="Back-End Development"
                        paragraph="Node.js | Express.js | Django | MongoDB | PostgreSQL"
                        icon={ FaNodeJs }
                    />
                    <Card
                        title="Languages"
                        paragraph="JavaScript | TypeScript | Python"
                        icon={ SiTypescript }
                    />
                </div>
            </div>
        </>
    );
};

export default About;
