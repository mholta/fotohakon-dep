import { TextField } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'
import {
  OptionsIntroWrapper,
  OptionsLabel,
} from '../components/elements/optionsIntroWrapper'
import Footer from '../components/footer'
import { BookingForm, PhoneEmailGrid } from '../components/forms/formElements'
import FormsChoice from '../components/forms/formsChoise'
import SubmitButton from '../components/forms/sendButton'
import { Container, Section } from '../components/layout/layout'
import MDRenderer from '../components/md/MDRenderer'
import Nav from '../components/nav'
import SEO from '../components/seo'

interface BookingPageProps {
  data: any
}

const ContactPage = ({
  data: { contentfulAndreHenvendelser },
}: BookingPageProps) => {
  const pageNode: ContactPageQueryNode = contentfulAndreHenvendelser

  const handleSubmit = () => {
    console.log('submit')
  }
  return (
    <div>
      <SEO title="Kontakt meg" />
      <Nav />
      {pageNode?.topText && (
        <Section>
          <Container style={{ textAlign: 'center' }}>
            <MDRenderer>{pageNode.topText}</MDRenderer>
          </Container>
        </Section>
      )}
      <Section>
        <Container style={{ textAlign: 'center' }} width="sm">
          <OptionsIntroWrapper style={{ paddingBottom: '6rem' }}>
            <MDRenderer>{pageNode.optionsIntro}</MDRenderer>
          </OptionsIntroWrapper>
        </Container>
      </Section>
      <Section lightGrey id="booking">
        <Container>
          <FormsChoice />
          <OptionsLabel>Kontakt meg</OptionsLabel>
          <BookingForm
            name="Andre henvendelser"
            autoComplete="off"
            method="POST"
            data-netlify="true"
            action="/takk"
          >
            <input type="hidden" name="form-name" value="Andre henvendelser" />
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

export default ContactPage

export const pageQuery = graphql`
  query {
    contentfulAndreHenvendelser(key: { eq: "other" }) {
      topText {
        raw
      }
      optionsIntro {
        raw
      }
    }
  }
`

export interface ContactPageQueryNode {
  topText: any
  optionsIntro: any
}
