import { Button } from '@material-ui/core'
import React, { CSSProperties } from 'react'
import CookieConsent from 'react-cookie-consent'

const wrapperStyles: CSSProperties = {
  position: 'fixed',
  left: '2rem',
  bottom: 20,
  zIndex: 200,

  padding: '2rem',
  backgroundColor: '#fefefe',
  boxShadow: '0px 1px 20px rgba(1, 1, 1, 0.2)',
}

const buttonStyle: CSSProperties = {
  backgroundColor: '#020202',
  color: '#fff',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  border: '1px solid #020202',
  borderLeft: 'none',
}

const declineButtonStyle: CSSProperties = {
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  border: '1px solid #ddd',
  borderRight: 'none',
}

const Kjeks = () => {
  return (
    <CookieConsent
      cookieName="gatsby-gdpr-consent-given"
      cookieValue={true}
      ButtonComponent={Button}
      buttonText="Jeg godtar"
      location="none"
      disableStyles
      declineButtonText="Nei takk"
      enableDeclineButton
      ariaAcceptLabel="jeg aksepterer bruk av cookies"
      ariaDeclineLabel="jeg aksepterer ikke bruk av cookies"
      style={wrapperStyles}
      buttonStyle={buttonStyle}
      declineButtonStyle={declineButtonStyle}
    >
      <p>
        <b>Hei</b>
        <br />
        Vi bruker cookies for å <br />
        måle bruken av siden.
        <br />
        <br />
      </p>
    </CookieConsent>
  )
}

export default Kjeks
