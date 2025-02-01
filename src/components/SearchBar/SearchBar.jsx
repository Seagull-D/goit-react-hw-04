import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
const SearchBar = ({ request }) => {
  const [query, setQuery] = useState("");
  const handleQuery = (evt) => {
    setQuery(evt.target.value.trim());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!query) {
      console.log("input empty");
      toast("I'm waiting for your request", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        position: "top-left",
      });
    }
    request(query.trim());
    setQuery("");
  };
  return (
    <header>
      <form className={s.inputForm}>
        <input
          className={s.input}
          onChange={handleQuery}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
