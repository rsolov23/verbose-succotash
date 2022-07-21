import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import config from "../config";
import { Box} from "@chakra-ui/react"

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const key = config.REACT_APP_API_KEY;
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <Box
      // animate={{ opacity: 1 }}
      // initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Box key={item.id}>
          <Link to={'/recipe/' + item.id}>
            <img src={item.image} alt="cuisine" />
            <h4>{item.title}</h4>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default Cuisine;
