import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { Grid, Card } from "../Styles/StyledCuisine";
import config from "../config";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const key = config.REACT_APP_API_KEY;
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt="searched cuisine" />
            <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

export default Searched;
