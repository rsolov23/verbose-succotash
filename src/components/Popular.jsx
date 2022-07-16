import React, { useEffect, useState } from "react";
import config from "../config";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const key = config.REACT_APP_API_KEY;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
