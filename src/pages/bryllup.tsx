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
import Slider from '../components/forms/sliderWrapper'
import { Container, Section } from '../components/layout/layout'
import MDRenderer from '../components/md/MDRenderer'
import Nav from '../components/nav'
import SEO from '../components/seo'
import StepsSection from '../components/steps/steps.section'

interface BookingPageProps {
  data: any
}

const BookingPage = ({
  data: { contentfulBryllupsside },
}: BookingPageProps) => {
  const weddingPageNode: WeddingPageQueryNode = contentfulBryllupsside

  const [selectedPhotoSolution, setSelectedPhotoSolution] =
    useState<string | null>()
  const [selectedVideoSoluton, setSelectedVideoSolution] =
    useState<string | null>()
  const [selectedExtraSoluton, setSelectedExtraSolution] =
    useState<string | null>()

  const handleSubmit = () => {
    console.log('submit')
  }
  return (
    <div>
      <SEO
        title="Bryllup"
        image={
          weddingPageNode.seoBilde?.file?.url
            ? 'https:' + weddingPageNode.seoBilde?.file?.url
            : undefined
        }
      />
      <Nav />
      <Section>
        <Container style={{ textAlign: 'center' }}>
          <MDRenderer>{weddingPageNode.topText}</MDRenderer>
        </Container>
      </Section>

      <StepsSection weddingPageNode={weddingPageNode} />

      <Section id="pakker">
        <Container style={{ textAlign: 'center' }} width="sm">
          <OptionsIntroWrapper>
            <MDRenderer>{weddingPageNode.optionsIntro}</MDRenderer>
          </OptionsIntroWrapper>
        </Container>
      </Section>

      <Section>
        <Container>
          <OptionsLabel>Foto</OptionsLabel>
          <Slider>
            {weddingPageNode.photoSolutions.map((node, index) => (
              <SelectionCard
                selected={selectedPhotoSolution === node.title.toUpperCase()}
                node={node}
                key={'ps' + index}
                onClick={() =>
                  setSelectedPhotoSolution(
                    selectedPhotoSolution === node.title.toUpperCase()
                      ? null
                      : node.title.toUpperCase()
                  )
                }
              />
            ))}
          </Slider>
        </Container>
      </Section>

      <Section>
        <Container>
          <OptionsLabel>Video</OptionsLabel>
          <Slider>
            {weddingPageNode.videoSolutions.map((node, index) => (
              <SelectionCard
                selected={selectedVideoSoluton === node.title.toUpperCase()}
                node={node}
                key={'vs' + index}
                onClick={() =>
                  setSelectedVideoSolution(
                    selectedVideoSoluton === node.title.toUpperCase()
                      ? null
                      : node.title.toUpperCase()
                  )
                }
              />
            ))}
          </Slider>
        </Container>
      </Section>

      <Section>
        <Container>
          <OptionsLabel>Tilleggsvalg</OptionsLabel>
          <Slider>
            {weddingPageNode.extras.map((node, index) => (
              <SelectionCard
                selected={selectedExtraSoluton === node.title.toUpperCase()}
                node={node}
                key={'es' + index}
                onClick={() =>
                  setSelectedExtraSolution(
                    selectedExtraSoluton === node.title.toUpperCase()
                      ? null
                      : node.title.toUpperCase()
                  )
                }
              />
            ))}
          </Slider>
        </Container>
      </Section>

      <Section lightGrey id="booking">
        <Container>
          <FormsChoice />
          <OptionsLabel>Fullfør bookingforespørsel</OptionsLabel>
          <BookingForm
            name="Booking bryllup"
            autoComplete="off"
            method="POST"
            data-netlify="true"
            action="/takk"
          >
            <input type="hidden" name="form-name" value="Booking bryllup" />
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

            <h3>Fotopakke</h3>
            <Slider summary>
              {weddingPageNode.photoSolutions.map((node, index) => (
                <SelectionCard
                  key={'phots-' + index}
                  summary
                  selected={selectedPhotoSolution === node.title.toUpperCase()}
                  node={node}
                  onClick={() =>
                    setSelectedPhotoSolution(
                      selectedPhotoSolution === node.title.toUpperCase()
                        ? null
                        : node.title.toUpperCase()
                    )
                  }
                />
              ))}
            </Slider>

            <h3>Videopakke</h3>
            <Slider summary>
              {weddingPageNode.videoSolutions.map((node, index) => (
                <SelectionCard
                  key={'vids-' + index}
                  summary
                  selected={selectedVideoSoluton === node.title.toUpperCase()}
                  node={node}
                  onClick={() =>
                    setSelectedVideoSolution(
                      selectedVideoSoluton === node.title.toUpperCase()
                        ? null
                        : node.title.toUpperCase()
                    )
                  }
                />
              ))}
            </Slider>

            <h3>Tilleggsvalg</h3>
            <Slider summary>
              {weddingPageNode.extras.map((node, index) => (
                <SelectionCard
                  summary
                  key={'extr-' + index}
                  selected={selectedExtraSoluton === node.title.toUpperCase()}
                  node={node}
                  onClick={() =>
                    setSelectedExtraSolution(
                      selectedExtraSoluton === node.title.toUpperCase()
                        ? null
                        : node.title.toUpperCase()
                    )
                  }
                />
              ))}
            </Slider>

            {/* Hidden fields for sending solution data */}
            <input
              name="Fotopakke"
              defaultValue={selectedPhotoSolution ?? ''}
              hidden
            />
            <input
              name="Videopakke"
              defaultValue={selectedVideoSoluton ?? ''}
              hidden
            />
            <input
              name="Tilleggsvalg"
              defaultValue={selectedExtraSoluton ?? ''}
              hidden
            />

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

export default BookingPage

export const pageQuery = graphql`
  query {
    contentfulBryllupsside(key: { eq: "weddingpage" }) {
      seoBilde {
        file {
          url
        }
      }
      imageOne {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        title
      }
      imageTwo {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        title
      }
      topText {
        raw
      }
      stepOne {
        raw
      }
      stepTwo {
        raw
      }
      stepThree {
        raw
      }
      photoSolutions {
        title
        content {
          raw
        }
      }
      optionsIntro {
        raw
      }
      videoSolutions {
        title
        content {
          raw
        }
      }
      extras {
        title
        content {
          raw
        }
      }
    }
  }
`

export interface WeddingPageQueryNode {
  seoBilde: any
  imageOne: any
  imageTwo: any
  topText: any
  stepOne: any
  stepTwo: any
  stepThree: any
  optionsIntro: any
  photoSolutions: { content: any; title: string }[]
  videoSolutions: { content: any; title: string }[]
  extras: { content: any; title: string }[]
}
