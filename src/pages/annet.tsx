import { FormControlLabel, TextField } from '@material-ui/core'
import { graphql } from 'gatsby'
import React, { useState } from 'react'
import {
  OptionsIntroWrapper,
  OptionsLabel,
} from '../components/elements/optionsIntroWrapper'
import {
  BookingForm,
  PhoneEmailGrid,
  RadioSlider,
} from '../components/forms/formElements'
import SelectionCard from '../components/forms/selectionCard'
import SubmitButton from '../components/forms/sendButton'
import Slider from '../components/forms/sliderWrapper'
import { Container, Section } from '../components/layout/layout'
import LogoTop from '../components/logoTop'
import MDRenderer from '../components/md/MDRenderer'

interface BookingPageProps {
  data: any
}

const OtherBookingsPage = ({
  data: { contentfulAndreBookinger },
}: BookingPageProps) => {
  const pageNode: OtherBookingsPageQueryNode = contentfulAndreBookinger

  const [selectedSolution, setSelectedSolution] = useState<string | null>()
  const handleSolutionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSolution((event.target as HTMLInputElement).value)
  }
  console.log(pageNode)

  const handleSubmit = () => {
    console.log('submit')
  }
  return (
    <div>
      <LogoTop />
      <Section>
        <Container style={{ textAlign: 'center' }}>
          <MDRenderer>{pageNode.topText}</MDRenderer>
        </Container>
      </Section>
      <Section>
        <Container style={{ textAlign: 'center' }} width="sm">
          <OptionsIntroWrapper>
            <MDRenderer>{pageNode.optionsIntro}</MDRenderer>
          </OptionsIntroWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <OptionsLabel>Foto</OptionsLabel>
          <Slider>
            {pageNode.solutions.map((node, index) => (
              <SelectionCard
                selected={selectedSolution === node.title.toUpperCase()}
                node={node}
                key={'ps' + index}
                onClick={() =>
                  setSelectedSolution(
                    selectedSolution === node.title.toUpperCase()
                      ? null
                      : node.title.toUpperCase()
                  )
                }
              />
            ))}
          </Slider>
        </Container>
      </Section>
      <Section lightGrey>
        <Container>
          <OptionsLabel>Fullfør booking</OptionsLabel>
          <BookingForm
            name="Booking annet"
            autoComplete="off"
            method="POST"
            data-netlify="true"
            action="/takk"
          >
            <input type="hidden" name="form-name" value="Booking annet" />
            <TextField id="fname" name="Navn" label="Navn" required fullWidth />
            <PhoneEmailGrid>
              <TextField id="fphone" name="Mobil" label="Mobil" required />
              <TextField
                id="femail"
                name="E-post"
                type="email"
                label="Epost"
                required
              />
            </PhoneEmailGrid>

            <h3>Pakke</h3>
            <RadioSlider
              aria-label="foto"
              name="Pakke"
              value={selectedSolution}
              onChange={handleSolutionChange}
            >
              {pageNode.solutions.map((node, index) => (
                <FormControlLabel
                  label=""
                  value={node.title}
                  key={'phots-' + index}
                  control={
                    <SelectionCard
                      summary
                      selected={selectedSolution === node.title.toUpperCase()}
                      node={node}
                      onClick={() =>
                        setSelectedSolution(
                          selectedSolution === node.title.toUpperCase()
                            ? null
                            : node.title.toUpperCase()
                        )
                      }
                    />
                  }
                />
              ))}
            </RadioSlider>

            <TextField
              id="fsubject"
              name="Emnefelt"
              label="Gjelder"
              required
              fullWidth
            />

            <TextField
              id="fmessage"
              name="Melding"
              label="Melding"
              placeholder="Vi ønsker dette og dette "
              multiline
              required
              fullWidth
            />

            <SubmitButton onClick={handleSubmit} />
          </BookingForm>
        </Container>
      </Section>
    </div>
  )
}

export default OtherBookingsPage

export const pageQuery = graphql`
  query {
    contentfulAndreBookinger(key: { eq: "other" }) {
      topText {
        raw
      }
      solutions {
        title
        content {
          raw
        }
      }
      optionsIntro {
        raw
      }
    }
  }
`

export interface OtherBookingsPageQueryNode {
  topText: any
  optionsIntro: any
  solutions: { content: any; title: string }[]
}
