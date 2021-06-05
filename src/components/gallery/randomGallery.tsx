import { withTheme } from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { CategoryPageQueryNode } from '../../pages'
import {
  isHorizontal,
  randomAlign,
  randomBool,
  randomInt,
  randomMargin,
  randomMargin4x,
  randomVwMargin4x,
} from '../../utils/random'
import { Button } from '../elements/button'
import Lightbox from './lightbox'
import LoadMoreButton from './loadmoreButton'

interface RandomGalleryProps {
  node: CategoryPageQueryNode
  appendWithAmount?: number
  columns?: number
  callback?: Function
}

const RandomGallery = ({
  node,
  appendWithAmount = 10,
  columns = 6,
  callback,
}: RandomGalleryProps) => {
  const [notLoaded, setNotLoaded] = useState<any[]>(node.gallery)
  const [loaded] = useState<LoadedElement[]>([])
  const maxMargin = 6

  const loadMore = (loadMoreButtonVisible: boolean) => {
    if (loadMoreButtonVisible) {
      const raw = notLoaded.slice(0, appendWithAmount)
      raw.forEach((imageData: any, index: number) => {
        const isHoriz: boolean = isHorizontal(
          imageData.gatsbyImageData.width ?? 1,
          imageData.gatsbyImageData.height ?? 2
        )

        const columnSpan = isHoriz ? 2 : 1 // randomInt(1, 1)
        const gridColumn =
          (isHoriz ? 'auto / span ' : 'auto / span ') + columnSpan

        const loadedElement: LoadedElement = {
          imageData: imageData,
          margin: isHoriz
            ? randomMargin(5, 'em', 0.4) + ' ' + randomMargin(8, 'em', 0.4)
            : randomMargin4x(5, 'em', 0.4),
          alignSelf: randomAlign(),
          gridColumn: gridColumn,
          gridColumnStart: isHoriz ? '1' : 'auto',
          justifySelf: randomAlign(),
        }
        loaded.push(loadedElement)
      })
      /* Update list over not loaded items */
      setNotLoaded(notLoaded.slice(appendWithAmount, notLoaded.length))
    }
    if (callback && !notLoaded.length) {
      callback(!loadMoreButtonVisible)
    }
  }
  const constraintsRef = useRef(null)

  //  useEffect(() => loadMore(false), [node])

  return (
    <RandomGalleryWrapper ref={constraintsRef}>
      <GalleryGrid>
        {loaded.map((loadedElement: LoadedElement, index: number) => (
          <ImageElement
            {...loadedElement}
            dragConstraints={constraintsRef}
            key={'randomImage-' + index}
          />
        ))}
      </GalleryGrid>
      <LoadMoreButton callback={loadMore} sendState hide={!notLoaded.length} />
    </RandomGalleryWrapper>
  )
}

const RandomGalleryWrapper = styled.div`
  min-height: 100em;
`

const ImageElement = ({
  margin,
  alignSelf,
  gridColumn,
  gridColumnStart,
  imageData,
  justifySelf,
  dragConstraints,
}: LoadedElement) => (
  <li
    style={{
      margin: margin,
      alignSelf: alignSelf,
      gridColumn: gridColumn,
      gridColumnStart: gridColumnStart,
      justifySelf: justifySelf,
      display: 'block',
      padding: 0,
      minWidth: '5em',
      maxWidth: '32em',
    }}
  >
    <Lightbox imageData={imageData} dragConstraints={dragConstraints} />
  </li>
)

const GalleryGrid = withTheme(styled.ul`
  font-size: 16px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 6em;
  padding: 0;
  padding: 4em;
  max-width: 100vw;

  ${(props) => props.theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr 1fr;
    font-size: 10px;
  }
`)

interface LoadedElement {
  imageData: any
  margin: string
  alignSelf: string
  gridColumn: string
  key?: string
  gridColumnStart: string
  justifySelf: string
  dragConstraints?: any
}

export default RandomGallery
