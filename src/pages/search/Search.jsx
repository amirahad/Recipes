import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./search.css";
import RecipeList from "../../components/RecipeList";

export default function Seacrh() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;
  const { error, isPending, data } = useFetch(url);
  return (
    <div className="">
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
