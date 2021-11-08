import ".././styles/ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = [...props.imageList];
  const renderImage = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="imageList">{renderImage}</div>;
};

export default ImageList;
