import { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { useEffect, useState } from "react";
import fetchPictures from "../services/api";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";
const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setIsError(false);

      try {
        setHits([]);
        const data = await fetchPictures(query);
        setHits(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        console.log("FINNALY");
        setLoading(false);
      }
    };
    getData();
  }, [query]);
  console.log(isError);
  return (
    <>
      <Toaster />
      <SearchBar request={setQuery} />
      {!isError ? <ImageGallery hitsArray={hits} /> : <ErrorMessage />}
      <Loader loading={isLoading} />
    </>
  );
};
export default App;
