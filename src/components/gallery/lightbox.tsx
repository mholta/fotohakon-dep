import {
  Backdrop,
  ButtonBase,
  Fade,
  IconButton,
  Modal,
} from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import Image from './image'

interface LightboxProps {
  imageData: any
}

const Lightbox = ({ imageData }: LightboxProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <LightboxWrapper>
      <GalleryImageButton onClick={handleOpen} disableRipple>
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
      >
        <Fade in={open}>
          <Container>
            <CloseButton onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
            <Image imageData={imageData} maxheight="80vh" />
          </Container>
        </Fade>
      </ModalWrapper>
    </LightboxWrapper>
  )
}

const LightboxWrapper = styled.div``

const GalleryImageButton = styled(ButtonBase)<Partial<LightboxProps>>`
  max-width: 100%;
  transition: all 400ms ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 1px 0px 10rem rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
  &:active {
    transform: scale(0.95);
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
  padding: 10vh 10vw;
`

const Container = styled.div`
  outline: none;
  max-height: 100%;
  max-width: 100%;
`

export default Lightbox
