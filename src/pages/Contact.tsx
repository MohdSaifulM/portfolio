import NavigationBar from "../layouts/NavigationBar";
import { MdOutlineContactMail } from "react-icons/md";

const Contact = () => {
    return (
        <>
            <NavigationBar />
            <div className="section">
                <div className="section section-about">
                    <div className="about">
                        <figure className="about__shape">
                            <MdOutlineContactMail className="contact__icon"/>
                        </figure>
                        <div className="about__text">
                            <h3>Contact</h3>
                            <p>
                                I am always open for discussions and keen to
                                make new connections. Feel free to contact me at
                                my email or connect with me on my LinkedIn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
