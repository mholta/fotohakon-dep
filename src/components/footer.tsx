import {
  faFacebookF,
  faFacebookMessenger,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withTheme } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'
import ArrowButton from './elements/arrowButton'
import { Container } from './layout/layout'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/*         <ScrollToTopButtonWrapper>
          <ArrowButton
            onClick={() => scrollTo('#top')}
            variant="light"
            direction="top"
          />
        </ScrollToTopButtonWrapper> */}
        <SocialsWrapper>
          <SocialIconWrapper href="https://www.facebook.com/fotohakon">
            <FontAwesomeIcon icon={faFacebookF} />
          </SocialIconWrapper>
          <SocialIconWrapper href="https://m.me/fotohakon">
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </SocialIconWrapper>
          <SocialIconWrapper href="https://www.instagram.com/fotohakon/">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIconWrapper>
          <SocialIconWrapper href="mailto:hakon@mjos.no?subject=Jeg har et spørsmål">
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialIconWrapper>
        </SocialsWrapper>
        <p>© Håkon Mjøs, {new Date().getFullYear()}</p>
        <p>Nettside og design av Magnus Holta.</p>
      </FooterContainer>
    </FooterWrapper>
  )
}

const ScrollToTopButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const SocialIconWrapper = withTheme(styled.a`
  color: ${(props) => props.theme.palette.primary.dark};
  transition: color 200ms ease;
  transition: transform 200ms ease;
  &:hover {
    color: ${(props) => props.theme.palette.primary.light};
  }
  &:active {
    transform: scale(0.9);
  }
  margin: 0 0.6rem;
`)

const SocialsWrapper = styled.div`
  display: inline-flex;
`
const FooterContainer = styled(Container)`
  position: relative;

  & > * {
    margin: 0.8rem 0;
  }
`
const FooterWrapper = withTheme(styled.footer`
  border-top: 1px solid ${(props) => props.theme.palette.primary.light};
  padding: 4rem;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.dark};
  position: relative;
  z-index: 120;
`)

export default Footer
