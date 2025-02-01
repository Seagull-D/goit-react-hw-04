import ImageCard from "../ImageCard/ImageCard";
import { useState } from "react";
import s from "./ImageGallery.module.css";
import ImageModal from "../ImageModal/ImageModal";

const ImageGallery = ({ hitsArrey }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <div>
      <ul className={s.imageGallery}>
        {hitsArrey.map((hit) => (
          <li key={hit.id}>
            <ImageCard hit={hit} onImageClick={openModal} />
          </li>
        ))}
      </ul>

      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={selectedImage}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default ImageGallery;
