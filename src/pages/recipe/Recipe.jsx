import "./recipe.css";
// import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";

export default function Recipe() {
  const { id } = useParams();
  // const url = "http://localhost:3000/recipes/" + id;
  // const { data, isPending, error } = useFetch(url);

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        // console.log(doc);
        if (doc.exists) {
          setIsPending(false);
          setData(doc.data());
        } else {
          setIsPending(false);
          setError("Coule Not Find The Recipe");
        }
      });
  }, [id]);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
}
