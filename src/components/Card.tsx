const Card = () => {
    return (
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                        Frontend Development
                    </span>
                </h4>
            </div>
            <div className="card__side card__side--back card__side--back-1">
                <div className="card__details">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;