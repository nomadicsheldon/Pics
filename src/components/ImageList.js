import "./ImageList.css";
import React from "react";

import ImageCard from "./ImageCard";

const ImageList = (props) => {
	// making one by one all image cards
	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});
	// all image cards returning here
	return <div className="image-list">{images}</div>;
};

export default ImageList;
