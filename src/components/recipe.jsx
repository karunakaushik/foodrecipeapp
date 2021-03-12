import React from 'react';
import style from './src/css/recipe.module.css'

const Recipe = ({ title, calories, image, ingredients, url }) => {

    return (
        <div className={style.recipe}>
            <h1>Recipe</h1>
            <h1>{title}</h1>
            <p><b>Calories: {calories}</b></p>
            <img className={style.image} src={image} alt="" />
            <div className={style.discriptonrecipe}>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                        // <li>{ingredient.food}</li>


                    ))}
                </ol>
                <p>Link: <a href={url}>{url}</a></p>
            </div>
        </div>
    );

}
export default Recipe;