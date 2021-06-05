import { Link, navigate } from 'gatsby'
import React, { CSSProperties } from 'react'
import styled from 'styled-components'

interface FormsChoiseProps {}

const FormsChoice = ({}: FormsChoiseProps) => {
  return (
    <FormChoices>
      <FormChoiceLink
        to="/bryllup"
        activeStyle={activeStyles}
        partiallyActive={true}
        onClick={(e: any) => {
          e.preventDefault()
          navigate('/bryllup/#booking')
        }}
      >
        Bryllup
      </FormChoiceLink>
      {' · '}
      <FormChoiceLink
        to="/familiepar"
        activeStyle={activeStyles}
        partiallyActive={true}
        onClick={(e: any) => {
          e.preventDefault()
          navigate('/familiepar/#booking')
        }}
      >
        Famile/par
      </FormChoiceLink>
      {' · '}
      <FormChoiceLink
        to="/kontakt"
        activeStyle={activeStyles}
        partiallyActive={true}
        onClick={(e: any) => {
          e.preventDefault()
          navigate('/kontakt/#booking')
        }}
      >
        Andre henvendelser
      </FormChoiceLink>
    </FormChoices>
  )
}

const activeStyles: CSSProperties = {
  fontWeight: 'bold',
  color: '#000',
}

const FormChoiceLink = styled(Link)`
  color: #555;
  text-transform: uppercase;
  text-decoration: none;
`

const FormChoices = styled.div``

export default FormsChoice
