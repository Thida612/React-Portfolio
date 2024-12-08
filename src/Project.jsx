import React from "react";
import PropTypes from "prop-types";

const Project = ({ image, altText }) => {
  return (
    <div className="portfolio-item">
      <img src={image} alt={altText} />
    </div>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Project;
