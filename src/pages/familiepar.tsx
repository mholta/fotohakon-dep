import { TextField } from '@material-ui/core'
import { graphql } from 'gatsby'
import React, { useState } from 'react'
import {
  OptionsIntroWrapper,
  OptionsLabel,
} from '../components/elements/optionsIntroWrapper'
import Footer from '../components/footer'
import { BookingForm, PhoneEmailGrid } from '../components/forms/formElements'
import FormsChoice from '../components/forms/formsChoise'
import SelectionCard from '../components/forms/selectionCard'
import SubmitButton from '../components/forms/sendButton'
import OptionCardsWrapper from '../components/forms/sliderWrapper'
import { Container, Section } from '../components/layout/layout'
import MDRenderer from '../components/md/MDRenderer'
import Nav from '../components/nav'
import SEO from '../components/seo'

interface BookingPageProps {
  data: any
}

const OtherBookingsPage = ({
  data: { contentfulFamiliepar },
}: BookingPageProps) => {
  const pageNode: OtherBookingsPageQueryNode = contentfulFamiliepar

  const [selectedSolution, setSelectedSolution] = useState<string | null>()

  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <div>
      <SEO
        title="Familie/par"
        image={
          pageNode.seoBilde?.file?.url
            ? 'https:' + pageNode.seoBilde?.file?.url
            : undefined
        }
      />
      <Nav />
      {pageNode?.topText && (
        <Section>
          <Container style={{ textAlign: 'center' }}>
            <MDRenderer>{pageNode.topText}</MDRenderer>
          </Container>
        </Section>
      )}
      <Section id="pakker">
        <Container style={{ textAlign: 'center' }} width="sm">
          <OptionsIntroWrapper>
            <MDRenderer>{pageNode.optionsIntro}</MDRenderer>
          </OptionsIntroWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <OptionCardsWrapper>
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
          </OptionCardsWrapper>
        </Container>
      </Section>
      <Section lightGrey id="booking">
        <Container>
          <FormsChoice />
          <OptionsLabel>Fullfør bookingforespørsel</OptionsLabel>
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
            <OptionCardsWrapper summary>
              {pageNode.solutions.map((node, index) => (
                <SelectionCard
                  key={'phots-' + index}
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
              ))}
            </OptionCardsWrapper>
            {/* Hidden fields for sending solution data */}
            <input name="Pakke" defaultValue={selectedSolution ?? ''} hidden />

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
              placeholder=""
              multiline
              required
              fullWidth
            />

            <SubmitButton onClick={handleSubmit} />
          </BookingForm>
        </Container>
      </Section>
      <Footer />
    </div>
  )
}

export default OtherBookingsPage

export const pageQuery = graphql`
  query {
    contentfulFamiliepar(key: { eq: "familiepar" }) {
      topText {
        raw
      }
      seoBilde {
        file {
          url
        }
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
  seoBilde: any
  optionsIntro: any
  solutions: { content: any; title: string }[]
}
