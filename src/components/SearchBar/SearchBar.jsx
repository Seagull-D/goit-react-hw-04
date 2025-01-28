import { useState } from "react";
import toast from "react-hot-toast";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleQery = (evt) => {
    setQuery(evt.target.value.trim());
  };

  const handleSabmit = (evt) => {
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

    console.log(query);
  };
  return (
    <header>
      <form>
        <input
          onChange={handleQery}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button onClick={handleSabmit} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
