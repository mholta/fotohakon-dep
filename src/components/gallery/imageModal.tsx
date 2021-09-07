import { ButtonBase, Fade, IconButton, Modal } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Image from './image'
import CloseIcon from '@material-ui/icons/Close'

interface ImageModalProps {
  currentImageData: any
  open: boolean
}

const ImageModal = ({ currentImageData, open }: ImageModalProps) => {
  return (
    <div>
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
    </div>
  )
}

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

export default ImageModal
