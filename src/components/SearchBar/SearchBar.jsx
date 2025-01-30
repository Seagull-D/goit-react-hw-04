import { useState } from "react";
import toast from "react-hot-toast";
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
      });
    }
    request(query.trim());
    setQuery("");
  };
  return (
    <header>
      <form>
        <input
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
