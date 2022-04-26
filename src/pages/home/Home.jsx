import { projectFirestore } from "../../firebase/config";
import "./home.css";
// import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import { useEffect, useState } from "react";

export default function Home() {
  // const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   setIsPending(true);

  //   projectFirestore
  //     .collection("recipes")
  //     .get()
  //     .then((snapshot) => {
  //       if (snapshot.empty) {
  //         setError("No Recipes to Load.");
  //         setIsPending(false);
  //       } else {
  //         let results = [];
  //         snapshot.docs.forEach((doc) => {
  //           // console.log(doc);
  //           results.push({ id: doc.id, ...doc.data() });
  //         });
  //         setData(results);
  //         setIsPending(false);
  //       }
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setIsPending(false);
  //     });
  // }, []);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No Recipes to Load.");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            // console.log(doc);
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    //cleanUp function
    return () => unsub();
  }, []);

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
