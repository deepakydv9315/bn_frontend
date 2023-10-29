import React from 'react';

const RecipeCard = ({ data }) => {
    const { image, title, description } = data;

    return (
        <div className="recipe-card">
            <img src={image} alt={title} className="recipe-image" />
            <h3 className="recipe-title">{title}</h3>
            <p className="recipe-description">{description}</p>
        </div>
    );
};

export default RecipeCard;
