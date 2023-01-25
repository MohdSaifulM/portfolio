const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <a href="">
                    <div className="card__display">
                        <i></i>
                        <h2></h2>
                    </div>
                    <div className="card__hover">
                        <h2></h2>
                        <p></p>
                    </div>
                </a>
                <div className="card__border"></div>
            </div>
        </div>
    );
};

export default Card;