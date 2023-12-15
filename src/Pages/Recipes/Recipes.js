import React from "react";
import "./Recipes.scss";
import recipe from "../../Assets/Images/recipe.png";
import RecipeCard from './RecipesCard';
import r1 from "../../Assets/Images/r1.png";
import r2 from "../../Assets/Images/r2.png";
import r3 from "../../Assets/Images/r3.png";
import r4 from "../../Assets/Images/r4.png";
import Coming from "../../Pages/ComingSoon/ComingSoon";

const Recipes = () => {
    const rData = [
        {
            id: 1,
            image: r1,
            title: 'Fruit smoothie bowl',
            description:
                'Calories intake- 136 g per 216 g serving',
        },
        {
            id: 2,
            image: r2,
            title: 'Mocha protein shake',
            description:
                'Calories intake- 136 g per 216 g serving',
        },
        {
            id: 3,
            image: r3,
            title: 'OATMEAL',
            description:
                'Calories intake- 136 g per 216 g serving',
        },
        {
            id: 4,
            image: r4,
            title: 'PEANUT BAR',
            description:
                'Calories intake- 136 g per 216 g serving',
        },
        {
            id: 5,
            image: r1,
            title: 'PEANUT BAR',
            description:
                'Calories intake- 136 g per 216 g serving',
        },
        {
            id: 6,
            image: r2,
            title: 'OATMEAL',
            description:
                'Calories intake- 136 g per 216 g serving',
        },
        {
            id: 7,
            image: r3,
            title: 'Fruit smoothie bowl',
            description:
                'Calories intake- 136 g per 216 g serving',
        },
        {
            id: 8,
            image: r4,
            title: 'Mocha protein shake',
            description:
                'Calories intake- 136 g per 216 g serving',
        },
    ];

    return (
        <div className="recipe">
            {/* <div className="image-with-text-container">
                <img src={recipe} alt="YourImage" className="image" />
                <div className="text">
                    Healthy <span>Recipes</span>
                </div>
            </div>
            <section className="recipe-section">
                <div className="upper">
                    <div className="headrecipe">Top Picks
                    </div>
                </div>
                <div className="recipe-cards">
                    {rData.map((recipe) => (
                        <RecipeCard key={recipe.id} data={recipe} />
                    ))}
                </div>
            </section> */}
            <Coming/>
        </div>
    );
};

export default Recipes;
