import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "0ded48bf034847a6a9a87cb5ebd386b1";
// const API_KEY = "be2233f5cdba4b29a751a7cc944b0cee";

export default function Search({ fooditem, setfooditem }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setfooditem(data.results);
    }

    if (query.trim() !== "") {
      fetchfood();
    } else {
      setfooditem([]);
    }
  }, [query]);

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
