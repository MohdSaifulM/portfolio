import { Player } from '@lottiefiles/react-lottie-player';
import NavigationBar from '../layouts/NavigationBar';

const Home = () => {
    return (
        <>
            <NavigationBar /> 
            <div className="section section-home-header">
                <h1 className="heading-home">Hello World, I'm Saif</h1>
                <Player
                    autoplay
                    loop
                    src="src\assets\rocket_animation.json"
                    style={{ height: '50rem', width: 'auto' }}
                >
                </Player>
            </div>
        </>
    );
};

export default Home;
