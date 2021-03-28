import React, { useState } from 'react'
import styled from 'styled-components'
import { CategoryPageQueryNode } from '../../pages'
import { randomAlign, randomInt, randomMargin4x } from '../../utils/random'
import Lightbox from './lightbox'
import LoadMoreButton from './loadmoreButton'

interface RandomGalleryProps {
  node: CategoryPageQueryNode
  appendWithAmount?: number
  columns?: number
}

const RandomGallery = ({
  node,
  appendWithAmount = 10,
  columns = 6,
}: RandomGalleryProps) => {
  const [notLoaded, setNotLoaded] = useState<any[]>(node.gallery)
  const [loaded, setLoaded] = useState<LoadedElement[]>([])
  const maxMargin = 6

  const loadMore = () => {
    const raw = notLoaded.slice(0, appendWithAmount)
    raw.forEach((imageData: any, index: number) => {
      const columnSpan = randomInt(1, 2)

      const loadedElement: LoadedElement = {
        imageData: imageData,
        margin: randomMargin4x(maxMargin),
        alignSelf: randomAlign(),
        gridColumn: 'auto / span ' + columnSpan,
      }
      loaded.push(loadedElement)
    })
    /* Update list over not loaded items */
    setNotLoaded(notLoaded.slice(appendWithAmount, notLoaded.length))
  }

  return (
    <>
      <GalleryGrid>
        {loaded.map((loadedElement: LoadedElement, index: number) => (
          <ImageElement {...loadedElement} key={'random-gallery-' + index} />
        ))}
      </GalleryGrid>
      <LoadMoreButton callback={loadMore} />
    </>
  )
}

const ImageElement = ({
  margin,
  alignSelf,
  gridColumn,
  imageData,
}: LoadedElement) => (
  <li
    style={{
      margin: margin,
      alignSelf: alignSelf,
      gridColumn: gridColumn,
      display: 'block',
      padding: 0,
      minWidth: 0,
    }}
  >
    <Lightbox imageData={imageData} />
  </li>
)

const GalleryGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 6rem;
  padding: 0;
  padding: 4rem;
`

interface LoadedElement {
  imageData: any
  margin: string
  alignSelf: string
  gridColumn: string
  key?: string
}

export default RandomGallery
