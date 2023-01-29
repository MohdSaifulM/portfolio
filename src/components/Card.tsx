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
                <a href="">
                    <div className="card__display">
                        <Icon className="icon"/>
                        <h2>{title}</h2>
                    </div>
                    <div className="card__hover">
                        <Icon className="icon"/>
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
