import ImageCard from "../ImageCard/ImageCard";

import s from "./ImageGallery.module.css";
const ImageGallery = ({ hitsArrey }) => {
  return (
    <ul className={s.imageGallery}>
      {hitsArrey.map((hit) => (
        <li key={hit.id}>
          <ImageCard hit={hit} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
