import React from 'react'
import './RecipeTile.css'
import  Animation from'./animation.js'

const RecipeTile = ({recipe}) => {
  const alt1="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80";
    return (<><div className="main_card">
      <div class="card">
      <h2 class="card-title">{recipe["recipe"]["label"] }</h2>
      <img src={recipe["recipe"]["image"]} alt={alt1}/>
      <p class="card-desc">
     <p className="ing">Ingridients</p>
       {recipe["recipe"]["ingredientLines"] }.
         <button className="more_button" onClick={()=>{
       { 
         window.open(recipe["recipe"]["url"])
      }
      }} >Know more</button>
      </p>
    
    
    </div></div>  
   </>
    )
}

export default RecipeTile;
