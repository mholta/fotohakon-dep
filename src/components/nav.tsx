import { withTheme } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.svg'
import ArrowBack from '../assets/ArrowBack.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from './typography'

interface NavProps {
  white?: boolean
  hamburgerOpen?: boolean
}

const Nav = ({ white }: NavProps) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)

  const open = () => setHamburgerOpen(true)
  const close = () => setHamburgerOpen(false)

  return (
    <NavWrapper id="top">
      <InnerFlexWrapper>
        <Hamburger
          open={hamburgerOpen}
          white={white ?? false}
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
              <MenuLogoWrapper white={white}>
                <Logo />
              </MenuLogoWrapper>
              <NavMenuLi variants={menuItemVariants}>
                <MenuItemHeader>Bryllup</MenuItemHeader>
                <Link to="/portfolio/bryllup" marginH="0.6rem" onClick={close}>
                  Portfolio
                </Link>
                <Link to="/bryllup/#pakker" marginH="0.6rem" onClick={close}>
                  Pakker og priser
                </Link>
              </NavMenuLi>
              <NavMenuLi variants={menuItemVariants}>
                <MenuItemHeader>Familie/par</MenuItemHeader>
                <Link
                  to="/portfolio/familiepar"
                  marginH="0.6rem"
                  onClick={close}
                >
                  Portfolio
                </Link>
                <Link to="/familiepar/#pakker" marginH="0.6rem" onClick={close}>
                  Pakker og priser
                </Link>
              </NavMenuLi>
              <NavMenuLi variants={menuItemVariants}>
                <MenuItemHeader>Andre henvendelser</MenuItemHeader>
                <Link to="/kontakt" onClick={close}>
                  Kontakt
                </Link>
              </NavMenuLi>
            </MenuLinkWrapper>
          )}
        </AnimatePresence>
        <LogoAnimationWrapperLink
          to="/"
          white={white ?? false}
          hamburgerOpen={hamburgerOpen}
        >
          <LogoWrapper white={white}>
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

const Hamburger = styled.div<{ open: boolean; white: boolean }>`
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
    background-color: ${(props) => (props.white ? '#fff' : '#000')};
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

const MenuItemHeader = withTheme(styled.h3`
  text-transform: uppercase;
  font-family: 'Source Sans Pro', sans;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: ${(props) => props.theme.palette.grey[500]};
  font-size: 1rem;
  margin-bottom: 0.6rem;
`)

const NavMenuLi = withTheme(styled(motion.li)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  margin: 1.2rem 0;
  position: relative;
  text-align: center;
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
  position: relative;
  z-index: 10;
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
    !props.white &&
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
  //background-color: ${(props) => props.theme.palette.secondary.light};
  background-color: white;

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

interface LogoWrapperProps {
  white: boolean
}

const LogoWrapper = withTheme(styled.div<LogoWrapperProps>`
  font-size: 2rem;

  color: ${(props) =>
    props.white
      ? props.theme.palette.grey[100]
      : props.theme.palette.grey[900]};

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
    fill: currentColor;
    ${(props) =>
      props.white
        ? `
      filter: 
        drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.18))
        drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25)) 
        drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));

      `
        : ``};
  }
`)
const MenuLogoWrapper = withTheme(styled.div<LogoWrapperProps>`
  position: absolute;
  bottom: 1rem;
  font-size: 1rem;

  color: ${(props) =>
    props.white
      ? props.theme.palette.grey[100]
      : props.theme.palette.grey[900]};

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
    fill: currentColor;
    ${(props) =>
      props.white
        ? `
      filter: 
        drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.18))
        drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25)) 
        drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));

      `
        : ``};
  }
`)

export default Nav
