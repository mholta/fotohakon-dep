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
import StepsSection from '../components/steps/steps.section'
import { Link } from '../components/typography'

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
  const [selectedExtraSoluton, setSelectedExtraSolution] = useState<string>('')

  const updateSelecteExtraSolutions = (solution: string) => {
    const array = selectedExtraSoluton.split(';;')
    const index = array.indexOf(solution)

    if (index === -1) array.push(solution)
    else array.splice(index, 1)

    setSelectedExtraSolution(array.join(';;'))
  }

  const handleSubmit = (e: any) => {
    //e.prevenDefault()

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
          <br />
          <Link to="/Portfolio/bryllup">Portfolio</Link>
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
          <OptionCardsWrapper>
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
          </OptionCardsWrapper>
        </Container>
      </Section>

      <Section>
        <Container>
          <OptionsLabel>Video</OptionsLabel>
          <OptionCardsWrapper>
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
          </OptionCardsWrapper>
        </Container>
      </Section>

      <Section>
        <Container>
          <OptionsLabel>Tilleggsvalg</OptionsLabel>
          <OptionCardsWrapper>
            {weddingPageNode.extras.map((node, index) => (
              <SelectionCard
                selected={
                  selectedExtraSoluton.indexOf(node.title.toUpperCase()) !== -1
                }
                node={node}
                key={'es' + index}
                onClick={() =>
                  updateSelecteExtraSolutions(node.title.toUpperCase())
                }
              />
            ))}
          </OptionCardsWrapper>
        </Container>
      </Section>

      <Section id="booking">
        <Container>
          <FormsChoice />
          <OptionsLabel>Send meg en melding</OptionsLabel>
          <BookingForm
            name="bryllupsbooking"
            autoComplete="off"
            method="POST"
            data-netlify="true"
            action="/portfolio/bryllup"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="bryllupsbooking" />
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
            <OptionCardsWrapper summary>
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
            </OptionCardsWrapper>

            <h3>Videopakke</h3>
            <OptionCardsWrapper summary>
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
            </OptionCardsWrapper>

            <h3>Tilleggsvalg</h3>
            <OptionCardsWrapper summary>
              {weddingPageNode.extras.map((node, index) => (
                <SelectionCard
                  summary
                  key={'extr-' + index}
                  selected={
                    selectedExtraSoluton.indexOf(node.title.toUpperCase()) !==
                    -1
                  }
                  node={node}
                  onClick={() =>
                    updateSelecteExtraSolutions(node.title.toUpperCase())
                  }
                />
              ))}
            </OptionCardsWrapper>

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
              id="freference"
              name="Referanse"
              label="Hvordan hørte dere om meg?"
              multiline
              fullWidth
              rows={6}
            />
            <TextField
              id="fsubject"
              name="OmBryllupet"
              label="Skriv litt om bryllupet deres og hvorfor vi er en god match"
              multiline
              required
              fullWidth
              rows={6}
            />

            <TextField
              id="fmessage"
              name="Spørsmål"
              label="Fortell meg hva dere lurer på"
              multiline
              required
              fullWidth
              rows={6}
            />

            <SubmitButton />
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
