import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./itemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const API_KEY = "0ded48bf034847a6a9a87cb5ebd386b1";
  // const API_KEY = "be2233f5cdba4b29a751a7cc944b0cee";

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!foodId) {
      setFood({});
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    async function fetchFood() {
      const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      {!foodId ? (
        <p>Select a recipe to view details</p>
      ) : (
        <div className={styles.recipeCard}>
          <h1 className={styles.recipeName}>{food.title}</h1>
          <img className={styles.recipeImage} src={food.image} alt="" />

          <div className={styles.recipeDetails}>
            <span>
              <strong>⏱️{food.readyInMinutes} Minutes</strong>
            </span>
            <span>
              👯‍♂️<strong>{food.servings} Serving</strong>
            </span>
            <span>
              {" "}
              <strong>{food.vegan ? "🥕vegan" : "🐄non-vegan"}</strong>
            </span>
            <span>
              <strong>
                {food.vegetarian ? "🥕vegetarian" : "🍗non-vegetarian"}
              </strong>
            </span>
          </div>

          <div>
            💲
            <span>
              {food.pricePerServing ? food.pricePerServing / 100 : "-"} Per
              serving
            </span>
          </div>
          <h2>Ingredients</h2>
          {isLoading ? <p>Loading ingredients...</p> : <ItemList food={food} />}
          <div>
            <h3>Instructions</h3>
            <div className={styles.recipeInstructions}>
              <ol>
                {isLoading ? (
                  <p>Loading...</p>
                ) : food.analyzedInstructions &&
                  food.analyzedInstructions[0] ? (
                  food.analyzedInstructions[0].steps.map((step, idx) => (
                    <li key={idx}>{step.step}</li>
                  ))
                ) : (
                  <p>No instructions available</p>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// https://api.spoonacular.com/recipes/716429/information?
