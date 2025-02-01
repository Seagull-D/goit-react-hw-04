import { Toaster, toast } from "react-hot-toast";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { useEffect, useState } from "react";
import fetchPictures from "../services/api";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      setLoading(true);
      setIsError(false);

      try {
        setHits([]);
        const data = await fetchPictures(query);
        if (data.length === 0) {
          toast.error("No images found for this request! 😕", {
            style: {
              background: "#b1cc29",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "10px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#d32f2f",
            },
            position: "top-left",
          });
        }
        setHits(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
        toast.error(
          "There was an error loading images, please try again later😢",
          {
            style: {
              background: "red",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "10px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#d32f2f",
            },
            position: "top-left",
          }
        );
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
      {!isError ? <ImageGallery hitsArrey={hits} /> : <ErrorMessage />}
      <Loader loading={isLoading} />
    </>
  );
};
export default App;
