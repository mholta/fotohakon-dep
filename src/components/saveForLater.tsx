import { withTheme } from '@material-ui/core'
import { motion, Transition, Variants } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'

interface SaveForLaterButtonProps {}

const SaveForLaterButton = ({}: SaveForLaterButtonProps) => {
  const [hover, setHover] = useState<boolean>(false)
  const [open, isOpen] = useState<boolean>(false)

  return (
    <MainWrapper
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Trigger>Lagre til senere</Trigger>
    </MainWrapper>
  )
}

const mainVariants: Variants = {
  hover: {
    rotateZ: 0,
    x: 0,
    y: 0,
  },
  initial: {
    rotateZ: -15,
    x: '-2.4rem',
    y: '-1.2rem',
  },
}

const mainTransition: Transition = {
  bounce: 0,
  type: 'spring',
}

const Trigger = withTheme(styled.div`
  padding: 0.3em 1em 0.3em 0.6em;
  background-color: white;
  font-size: 1em;
  border-left: 0.5em solid ${(props) => props.theme.palette.secondary.dark};
  cursor: pointer;
`)

const MainWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 1rem;
  z-index: 200;
  font-size: 0.9rem;
  transform: translateY(-0.6rem);

  transition: transform 200ms ease;

  &:hover {
    transform: translateY(0);
  }
`

export default SaveForLaterButton
