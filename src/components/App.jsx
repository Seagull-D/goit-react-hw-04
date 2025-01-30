import { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { useEffect, useState } from "react";
import fetchPictures from "../services/api";

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPictures(query);
      setHits(data);
    };
    getData();
  }, [query]);
  console.log(hits);
  return (
    <>
      <Toaster />
      <SearchBar request={setQuery} />
    </>
  );
};
export default App;
