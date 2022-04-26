import "./recipeList.css";
import Delete from "../assets/Delete.svg";

import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div className="error">Sorry! Nothing Found. Try somthing else.</div>
    );
  }

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            src={Delete}
            alt="delete_icon"
            className="delete"
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}
