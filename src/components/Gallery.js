import React, { useState } from "react";
import Modal from "react-modal";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image5 from "../imges/1.jpg";
import image2 from "../imges/2.jpg";
import image3 from "../imges/3.jpg";
import image4 from "../imges/4.jpg";
import image1 from "../imges/5.jpg";
import image6 from "../imges/6.jpg";
import image7 from "../imges/7.jpg";
import image8 from "../imges/8.jpg";
import image9 from "../imges/9.jpg";
import image10 from "../imges/10.jpg";
import image11 from "../imges/11.jpg";
import image12 from "../imges/12.jpg";
import { useTranslation } from "react-i18next";
function Gallery() {
  const { t, i18n } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };
  return (
    <div className="gallery">
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image1)}
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
              {t("Artificial Grass for Sports Surfaces")}
            </p>
          </div>
        </div>
      </div>
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image2)}
        style={{
          backgroundImage: `url(${image2})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
              {t("Artificial Grass for Landscape")}
            </p>
          </div>
        </div>
      </div>
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image3)}
        style={{
          backgroundImage: `url(${image3})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
            {t("Artificial Grass for Landscape")}
            </p>
          </div>
        </div>
      </div>
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image4)}
        style={{
          backgroundImage: `url(${image4})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
              {t("Acrylic Flooring")}
            </p>
          </div>
        </div>
      </div>
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image5)}
        style={{
          backgroundImage: `url(${image5})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
              {t("Acrylic Flooring")}
            </p>
          </div>
        </div>
      </div>
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image6)}
        style={{
          backgroundImage: `url(${image6})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
              {t("Acrylic Flooring")}
            </p>
          </div>
        </div>
      </div>
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image7)}
        style={{
          backgroundImage: `url(${image7})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
              {t("Rubber Flooring")}
            </p>
          </div>
        </div>
      </div>
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image8)}
        style={{
          backgroundImage: `url(${image8})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
              {t("Rubber Flooring")}
            </p>
          </div>
        </div>
      </div>
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image9)}
        style={{
          backgroundImage: `url(${image9})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
              {t("Rubber Flooring")}
            </p>
          </div>
        </div>
      </div>
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image10)}
        style={{
          backgroundImage: `url(${image10})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
              {t("Tartan Flooring")}
            </p>
          </div>
        </div>
      </div>
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image11)}
        style={{
          backgroundImage: `url(${image11})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
              {t("Tartan Flooring")}
            </p>
          </div>
        </div>
      </div>
      <div
        className="image backgroundColorGallary image-container"
        onClick={() => openModal(image12)}
        style={{
          backgroundImage: `url(${image12})`,
        }}
      >
        <div className="overlay">
          <div className="overlay-content flex flex-col items-start justify-end h-[200px] v ">
            <div className=" w-full flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-[30px] icon text-green-500 "
                id="icon"
              />
            </div>
            <p className=" font-light text-xl pl-5 pb-5 text-white">
              {t("Tartan Flooring")}
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
        <img src={selectedImage} alt="Selected Image" className="modal-image" />
      </Modal>
    </div>
  );
}

export default Gallery;
