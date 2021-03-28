import { withTheme } from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Image from '../../../components/gallery/image'
import { HomePageQueryNode } from '../../../pages'
import styled from 'styled-components'
import ArrowButton from '../../../components/elements/arrowButton'

interface HeaderSliderProps {
  node: HomePageQueryNode
  speed: number // seconds
  autoplay?: boolean
}

const HeaderSlider = ({ node, speed = 2, autoplay }: HeaderSliderProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(autoplay ?? false)

  const play = () => setIsPlaying(true)
  const pause = () => setIsPlaying(false)

  const maxLength = node.headerImages.length
  let timeout: any

  const next = () => {
    if (timeout) clearTimeout(timeout)
    setCurrentImage((currentImage + 1) % maxLength)
  }

  const prev = () => {
    if (timeout) clearTimeout(timeout)
    setCurrentImage(Math.abs(currentImage - 1) % maxLength)
  }

  useEffect(() => {
    if (isPlaying) {
      timeout = setTimeout(next, speed * 1000)
    }
  }, [currentImage])

  const handleNextButtonClick = () => {
    pause()
    next()
  }

  const handlePrevButtonClick = () => {
    pause()
    prev()
  }

  return (
    <MainWrapper>
      <ControlsWrapper>
        <ArrowButton direction="left" onClick={handleNextButtonClick} />
        <ArrowButton direction="right" onClick={handlePrevButtonClick} />
      </ControlsWrapper>
      <CarouselContentWrapper>
        {node.headerImages.map((imageData, index: number) => (
          <AnimatePresence key={'header-slider-image-' + index}>
            {index === currentImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Image imageData={imageData} />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </CarouselContentWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const ControlsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CarouselContentWrapper = withTheme(styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: ${(props) => props.theme.palette.grey.A400};

  & > div {
    /* Styling AnimatePresence */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }
`)

export default HeaderSlider
