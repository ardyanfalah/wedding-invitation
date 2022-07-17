import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

const Mosques = ({ src }) => {
  return (
    <LazyLoad>
      <StyledImage src={src} />
    </LazyLoad>
  )
}
export default LazyImageNonStyle
