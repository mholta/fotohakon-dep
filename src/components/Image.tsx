import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

interface ImageProps {
  imageData: any
}

const Image = ({ imageData }: ImageProps) => {
  const image = getImage(imageData)
  return <>{image && <GatsbyImage image={image} alt={imageData.title} />}</>
}

export default Image
