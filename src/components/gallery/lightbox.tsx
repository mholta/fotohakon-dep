import {
  Backdrop,
  ButtonBase,
  Fade,
  IconButton,
  Modal,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import Image from './image'
import { motion } from 'framer-motion'

interface LightboxProps {
  imageData: any
  dragConstraints: any
  drag: boolean
}

const Lightbox = ({ imageData, dragConstraints, drag }: LightboxProps) => {
  const [open, setOpen] = useState<boolean>(false)
  /*   const [wantsToOpen, setWantsToOpen] = useState<boolean>(false)
  const [dragging, setDragging] = useState<boolean>(false)
  const [tap, setTap] = useState<boolean>(true) */

  /*   useEffect(() => {
    if (wantsToOpen) {
      if (!dragging) setOpen(true)
      else setDragging(false)
    }
  }, [tap, wantsToOpen]) */

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <LightboxWrapper>
      <GalleryImageButton
        onClick={() => {
          setOpen(true)
        }}
        style={{ cursor: 'pointer' }}
      >
        <Image imageData={imageData} maxheight="90vh" />
      </GalleryImageButton>

      <ModalWrapper
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ cursor: 'pointer' }}
      >
        <Fade in={open}>
          <Container>
            <CloseButton onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
            <ButtonBase disableRipple onClick={handleClose}>
              <Image imageData={imageData} maxheight="94vh" />
            </ButtonBase>
          </Container>
        </Fade>
      </ModalWrapper>
    </LightboxWrapper>
  )
}

const LightboxWrapper = styled.div``

const GalleryImageButton = styled.div<Partial<LightboxProps>>`
  display: relative;
  max-width: 100%;
  cursor: move;
  z-index: 2;

  transition: transform 400ms ease, box-shadow 400ms ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 1px 0px 10rem rgba(0, 0, 0, 0.1);
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:active {
    transform: scale(0.98);
    z-index: 100;
  }
`

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 5vh;
  right: 3vw;
`

const ModalWrapper = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vh 1vw;
`

const Container = styled.div`
  outline: none;
  max-height: 100%;
  max-width: 100%;
`

export default Lightbox
