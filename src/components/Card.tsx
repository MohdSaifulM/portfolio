const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <a href="">
                    <div className="card--display">
                        <i></i>
                        <h2></h2>
                    </div>
                    <div className="card--hover">
                        <h2></h2>
                        <p></p>
                    </div>
                </a>
                <div className="card--border"></div>
            </div>
        </div>
    );
};

export default Card;