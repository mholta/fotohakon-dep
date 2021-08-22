import { withTheme } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.svg'
import ArrowBack from '../assets/ArrowBack.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from './typography'

interface NavProps {
  noArrow?: boolean
  hamburgerOpen?: boolean
}

const Nav = ({ noArrow }: NavProps) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)

  /*   useEffect(() => {
    if (typeof document !== `undefined`)
      document.body.style.overflow = hamburgerOpen ? 'hidden' : 'auto'
  }, [hamburgerOpen]) */

  return (
    <NavWrapper id="top">
      <InnerFlexWrapper>
        <Hamburger
          open={hamburgerOpen}
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          <span />
          <span />
          <span />
          <span />
        </Hamburger>
        <AnimatePresence>
          {hamburgerOpen && (
            <MenuLinkWrapper
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={menuContainerVariants}
            >
              <motion.li variants={menuItemVariants}>
                <NavLink to="/bryllup/#pakker">Bryllupspakker</NavLink>
              </motion.li>
              <motion.li variants={menuItemVariants}>
                <NavLink to="/familiepar/#pakker">Familie/par-pakker</NavLink>
              </motion.li>
              <motion.li variants={menuItemVariants}>
                <NavLink to="/kontakt">Andre henvendelser</NavLink>
              </motion.li>
            </MenuLinkWrapper>
          )}
        </AnimatePresence>
        <LogoAnimationWrapperLink
          to="/"
          noArrow={noArrow ?? false}
          hamburgerOpen={hamburgerOpen}
        >
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <ArrowBackWrapper>
            <ArrowBack />
          </ArrowBackWrapper>
        </LogoAnimationWrapperLink>
      </InnerFlexWrapper>
    </NavWrapper>
  )
}
const menuContainerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}

const menuItemVariants = {
  hidden: { opacity: 0, x: -10, transition: { duration: 0.4 } },
  show: { opacity: 1, x: 0 },
}

const Hamburger = styled.div<{ open: boolean }>`
  position: ${(props) => (props.open ? 'fixed' : 'absolute')};
  z-index: 150;

  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  width: 1.4em;
  height: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 200ms ease;

  & > span {
    height: 2px;
    width: 100%;
    background-color: #000;
    transition: transform 200ms ease, opacity 200ms ease;
  }
  & > span:nth-child(2) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  &:hover {
    transform: scale(1.06);
  }

  ${(props) =>
    props.open &&
    `
  & > span:nth-child(3) {
    transform: rotateZ(-45deg);
  }
  & > span:nth-child(2) {
    transform: rotateZ(45deg);
  }
  & > span:nth-child(1) {
    opacity: 0;
    transform: translateY(1000%) scaleX(0.2);
  }
  & > span:nth-child(4) {
    opacity: 0;
    transform: translateY(-1000%) scaleX(0.2);
  }
  `}
`

const NavLink = withTheme(styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  margin: 1rem 0;
  position: relative;
`)

const ArrowBackWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 35%;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
`

const LogoAnimationWrapperLink = styled(GatsbyLink)<NavProps>`
  position: ${(props) => (props.hamburgerOpen ? 'fixed' : 'relative')};
  z-index: 100;
  display: flex;
  justify-content: center;
  text-decoration: none;
  & > div:first-child {
    opacity: 1;
    transition: opacity 200ms ease;
  }

  & > div:last-child {
    opacity: 0;
    transition: opacity 200ms ease;
  }
  ${(props) =>
    !props.noArrow &&
    `
  &:hover > div:first-child {
    opacity: 0;
  }
  &:hover > div:last-child {
    opacity: 1;
  }`}
`

const InnerFlexWrapper = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
`

const MenuLinkWrapper = withTheme(styled(motion.ol)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.palette.secondary.light};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  list-style: none;
`)

const NavWrapper = withTheme(styled.nav`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem;

  z-index: 100;
`)

const LogoWrapper = withTheme(styled.div`
  font-size: 2rem;

  color: ${(props) => props.theme.palette.grey[900]};

  height: 3.3em;
  width: 10em;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    height: 20em;
    width: 12em;
    margin-top: -15.3em;
    margin-bottom: -16.1em;
    margin-left: -0.8em;
    margin-right: -0.8em;
  }
`)

export default Nav
