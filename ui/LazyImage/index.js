import PropTypes from "prop-types";
import React from "react";
import Img from "react-cloudinary-lazy-image";

const LazyImage = ({ fixed, ...props }) => (
  <Img cloudName="femzy123" fixed={fixed} {...props} />
);

LazyImage.propTypes = {
  fixed: PropTypes.any,
};

export { LazyImage };
