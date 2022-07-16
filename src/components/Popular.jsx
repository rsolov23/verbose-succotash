import React,{ useEffect } from "react"
import config from "../config"
function Popular() {

useEffect(() => {
  getPopular();
},[]);

const getPopular = async () => {
  const key = config.REACT_APP_API_KEY;
  const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9`)
  const data = await api.json()
  console.log(data)
  }
  return (
    <div>Popular</div>
  )
}

export default Popular