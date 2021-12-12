import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

const StyledImage = styled.img`
`;

const LazyImageNonStyle = ({ src }) => {
 

  return (
      <LazyLoad>
        <StyledImage
          src={src}
        />
      </LazyLoad>
  );
};

LazyImageNonStyle.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LazyImageNonStyle;
