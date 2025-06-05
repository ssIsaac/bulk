import React from "react";

function Recipe(){
    return (
    <div>
        <h1>Taco Town 🌮</h1>
        <form action="/recipe" method="POST" class="buttons">
            <button type="submit" value="chicken" name="choice">🍗</button>
            <button type="submit" value="beef" name="choice">🥩</button>
            <button type="submit" value="fish" name="choice">🐟</button>
        </form>
        <div id="recipeContainer" class="hidden">
            <h2 id="recipeTitle">
                recipe name
            </h2>

            <p>Marcros: </p>
            <p>Preparation time:</p>
            <p>Cost:</p>

            <h3>Ingredients:</h3>
            <ul id="ingredientsList">
                <li>
                    hello
                </li>
                <li>
                    hello
                </li>
            </ul>

            <h3>Preparation Steps:</h3>
            <ul id="ingredientsList">
                <li>
                    Ingredients list 
                </li>
            </ul>
        </div>
    </div>
        // <h1>Hello</h1>
)}

export default Recipe