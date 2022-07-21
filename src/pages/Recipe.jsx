import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../config";
import { DetailWrapper, Info, StyledButton } from "../Styles/StyledDetail";
function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState({});

  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const key = config.REACT_APP_API_KEY;
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${key}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt="" />
    </div>
    <Info>
      <StyledButton
        className={activeTab === "instructions" ? "active" : ""}
        onClick={() => setActiveTab("instructions")}
      >
        Instructions
      </StyledButton>
      <StyledButton
        className={activeTab === "ingredients" ? "active" : ""}
        onClick={() => setActiveTab("ingredients")}
      >
        Ingredients
      </StyledButton>
      {/* Ici on fait en sorte de render que dans notre boutton est sur instruction.
      Si activeTab est sur instruction et que le div existe ça render. */}
      {activeTab === "instructions" && (
        <div>
          {/* Ici on transforme du code HTML stored sous format string dans l'API en code HTML */}
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        </div>
      )}
      {activeTab === "ingredients" && (
        /* Ici on map sur tous les ingrédients renvoyé par l'api sur l'id qu'on a. */

        <ul>
          {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      )}
      ;
    </Info>
  </DetailWrapper>
  );
}

export default Recipe;
