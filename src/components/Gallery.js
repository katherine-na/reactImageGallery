import React, { useState } from "react";
import "../styles/App.css";

const images = [
  { src: "https://ss632.liverpool.com.mx/xl/1126518397.jpg" },
  { src: "https://ss632.liverpool.com.mx/xl/1126518397_1p.jpg" },
  { src: "https://ss632.liverpool.com.mx/xl/1126518397_4p.jpg" },
  { src: "https://ss632.liverpool.com.mx/xl/1126518397_3p.jpg" },
  { src: "https://ss632.liverpool.com.mx/xl/1133719853_2P.jpg" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
    setShowModal(false);
  };

  const handleClickImage = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="gallery">
      <div className="thumbnails">
        {images.map((image) => (
          <Thumbnail
            key={image.src}
            src={image.src}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="viewer-container">
          <ClickableImage src={selectedImage.src} onClick={() => handleClickImage()} />
        </div>
      )}
      {showModal && (
        <div className="modal" onClick={() => handleCloseModal()}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage.src} />
            <button onClick={() => handleCloseModal()}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Thumbnail = ({ src, onClick }) => <img src={src} onClick={onClick} />;

const ClickableImage = ({ src, onClick }) => (
  <div className="viewer" onClick={onClick}>
    <img src={src} />
  </div>
);

export default Gallery;
