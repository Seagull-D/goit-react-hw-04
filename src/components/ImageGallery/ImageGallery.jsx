import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ hitsArrey, onImageClick }) => {
  return (
    <div>
      <ul className={s.imageGallery}>
        {hitsArrey.map((hit) => (
          <li key={hit.id}>
            <ImageCard hit={hit} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
