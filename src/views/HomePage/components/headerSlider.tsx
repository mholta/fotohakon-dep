import { IconButton, withTheme } from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Image from '../../../components/image'
import { HomePageQueryNode } from '../../../pages'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import styled from 'styled-components'

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
        <PrevButton onClick={handleNextButtonClick}>
          <ArrowForwardIosIcon />
        </PrevButton>
        <NextButton onClick={handlePrevButtonClick}>
          <ArrowForwardIosIcon />
        </NextButton>
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
  position: relative;
  width: 100%;
  padding-bottom: 50%;
`

const ControlsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto 1fr;
  place-items: center;
`

const PrevButton = styled(IconButton)`
  grid-column: 1;
  grid-row: 2;
  color: #fff;

  & > * {
    transform: rotateZ(180deg);
  }
`

const NextButton = styled(IconButton)`
  grid-column: 3;
  grid-row: 2;
  color: #fff;
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
