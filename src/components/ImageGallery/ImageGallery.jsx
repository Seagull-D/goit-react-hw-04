import ImageCard from "../ImageCard/ImageCard";

import s from "./ImageGallery.module.css";
const ImageGallery = ({ hitsArrey }) => {
  if (!hitsArrey || hitsArrey.length === 0) {
    return (
      <p className={s.noResults}>No images found. Try another search! 😕</p>
    );
  }
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
