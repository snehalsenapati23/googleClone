import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneIcon from "@mui/icons-material/MicNone";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../stateProvider";
import { actionTypes } from "../../reducer";


const Search = ({ hidebuttons}) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [{term}]=useStateValue();

  const [{},dispatch]=useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })

    navigate("/search");

  };
  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon />
        <input
          className="search-icon"
          value={term?term:input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicNoneIcon />
        <PhotoCameraIcon className="cam" />
      </div>
      {
      !hidebuttons ? (
        
        <div className="buttons">
          <Button type="submit" onClick={handleSubmit} variant="outlined">
            Google Search
          </Button>
          <Button type="submit" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      ):(
        <div className="buttons" style={{display:"none"}}>
          <Button type="submit" onClick={handleSubmit} variant="outlined">
            Google Search
          </Button>
         
        </div>
      )}
    </form>
  );
};

export default Search;
