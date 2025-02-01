import s from "./ImageCard.module.css";
const ImageCard = ({ hit, onImageClick }) => {
  return (
    <div>
      <img
        className={s.cardImg}
        src={hit.urls.regular}
        alt={hit.alt_description}
        onClick={() => onImageClick(hit.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
