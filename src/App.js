import React, { useState,useEffect } from "react";
import "./App.css";
import "./key.js";
import Axios from "axios";
import "./RecipeTile.js";
import RecipeTile from "./RecipeTile.js";
import  Animation from'./animation.js'
 //import *as ReactBootStrap from 'react-bootStrap';

function App(props) {
  const [query, setQuery] = useState("chicken");
  const [recipes, setrecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const YOUR_APP_ID = "4b62fab6";
  const YOUR_APP_KEY = "e90ef330cf9d0f6c96b40ac009940441";
  var url = `https://api.edamam.com/search?q=${query} &app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
 
 
  useEffect(() => {
   getRecipes();

  }, [])
  async function getRecipes() {
  try{
    var result = await Axios.get(url);
    console.log(result.data);
    setrecipes(result.data.hits);
    setLoading(true);
  }
  catch(e){
    console.log(e);
  }
  
  }
 

 

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <>
      <div className="all">
        <h1 className="text_head">Food recipe finder </h1>
        <form
          className="text-center p-l-r-4 border-solid-bg-green "
          onSubmit={()=>{
            setLoading(true);
            onSubmit();
          }}
        >
          <input
            className="bar"
            type="text"
            placeholder="Enter your recipe"
            values={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          ></input>
          <input
            className="search"
            type="submit"
            value="search"
          ></input>
        </form>
        <div className="app_recipe">
          <div></div>
          { loading ?recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          }):<Animation/>}
        </div>
      </div>
    </>
  );
}

export default App;
