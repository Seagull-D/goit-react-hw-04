import s from "./ImageCard.module.css";
const ImageCard = ({ hit }) => {
  return (
    <div>
      <img
        className={s.cardImg}
        src={hit.urls.regular}
        alt={hit.alt_description}
      />
    </div>
  );
};

export default ImageCard;
