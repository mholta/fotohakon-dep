import { withTheme } from '@material-ui/core'
import styled from 'styled-components'

interface SectionProps {
  lightGrey?: boolean
}

export const Section = withTheme(styled.section<SectionProps>`
  padding: 4rem 1rem;
  background-color: ${(props) =>
    props.lightGrey ? props.theme.palette.grey[200] : 'transparent'};
`)

export const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
`

interface CenterChildProps {
  absolute?: boolean
  fullWidth?: boolean
  bottom?: boolean
  top?: boolean
}

export const CenterChild = styled.div<CenterChildProps>`
  display: grid;
  place-items: center;
  ${(props) => (props.absolute ? `position: absolute;` : ``)}
  ${(props) => (props.fullWidth ? `left:0;width:100%;` : ``)}
  ${(props) => (props.bottom ? `bottom:0;` : ``)}
  ${(props) => (props.top ? `top:0;` : ``)}
`
