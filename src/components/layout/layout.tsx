import styled from 'styled-components'

export const Section = styled.section`
  padding: 10rem 2rem;
`

export const Container = styled.div`
  max-width: 980px;
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
