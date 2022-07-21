import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { InputStyle } from "../Styles/StyledSearch";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <InputStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          aria-label="text"
          value={input}
        />
      </div>
    </InputStyle>
  );
}

export default Search;
