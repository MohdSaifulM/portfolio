import React from "react";

const Card: React.FC<{ title: string; paragraph: string, icon: React.ElementType }> = ({
    title,
    paragraph,
    icon
}) => {
    const Icon = icon;
    return (
        <div className="card-container">
            <div className="card">
                <div className="card__function">
                    <div className="card__display">
                        <Icon className="card__icon"/>
                        <h2>{title}</h2>
                        <p>{paragraph}</p>
                    </div>
                    <div className="card__hover">
                        <Icon className="card__icon"/>
                        <h2>{title}</h2>
                        <p>{paragraph}</p>
                    </div>
                </div>
                <div className="card__border"></div>
            </div>
        </div>
    );
};

export default Card;
