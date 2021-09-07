import { withTheme } from '@material-ui/core'
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
  color: '#000',
  fontWeight: 'bold',
}

const FormChoiceLink = withTheme(styled(Link)`
  color: #888;
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Source Sans Pro', sans;
`)

const FormChoices = styled.div`
  margin-bottom: 2rem;
`

export default FormsChoice
