const Card: React.FC<{title:string, paragraph: string}> = ({title, paragraph}) => {
    return (
        <div className="card-container">
            <div className="card">
                <a href="">
                    <div className="card__display">
                        <i></i>
                        <h2>{title}</h2>
                        <p>{paragraph}</p>
                    </div>
                    <div className="card__hover">
                        <h2>{title}</h2>
                        <p>{paragraph}</p>
                    </div>
                </a>
                <div className="card__border"></div>
            </div>
        </div>
    );
};

export default Card;
