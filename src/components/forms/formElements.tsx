import { RadioGroup } from '@material-ui/core'
import styled from 'styled-components'

export const PhoneEmailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1rem;
`

export const BookingForm = styled.form`
  & > :not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const RadioSlider = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  overflow: auto;
  margin-right: -3rem;
  & > * {
    margin-left: 0;
    margin-right: 1rem;
  }
`
