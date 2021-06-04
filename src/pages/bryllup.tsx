import { FormControlLabel, TextField } from '@material-ui/core'
import { graphql } from 'gatsby'
import React, { useState } from 'react'
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
import StepsSection from '../components/steps/steps.section'

interface BookingPageProps {
  data: any
}

const BookingPage = ({
  data: { contentfulBryllupsside },
}: BookingPageProps) => {
  const weddingPageNode: WeddingPageQueryNode = contentfulBryllupsside

  const [selectedPhotoSolution, setSelectedPhotoSolution] =
    useState<string | null>('HALVDAG')
  const [selectedVideoSoluton, setSelectedVideoSolution] =
    useState<string | null>('HELDAG')
  const [selectedExtraSoluton, setSelectedExtraSolution] =
    useState<string | null>()

  const handlePhotoSolutionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPhotoSolution((event.target as HTMLInputElement).value)
  }
  const handleVideoSolutionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedVideoSolution((event.target as HTMLInputElement).value)
  }
  const handleExtraSolutionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedExtraSolution((event.target as HTMLInputElement).value)
  }
  console.log(weddingPageNode)

  const handleSubmit = () => {
    console.log('submit')
  }
  return (
    <div>
      <LogoTop />
      <Section>
        <Container style={{ textAlign: 'center' }}>
          <MDRenderer>{weddingPageNode.topText}</MDRenderer>
        </Container>
      </Section>

      <StepsSection weddingPageNode={weddingPageNode} />

      <Section>
        <Container style={{ textAlign: 'center' }} width="sm">
          <MDRenderer>{weddingPageNode.optionsIntro}</MDRenderer>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Foto</h2>
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
          <h2>Video</h2>
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
          <h2>Tilleggsvalg</h2>
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

      <Section lightGrey>
        <Container>
          <h2>Fullfør booking</h2>
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

            <h2>Foto</h2>
            <RadioSlider
              aria-label="foto"
              name="Fotopakke"
              value={selectedPhotoSolution}
              onChange={handlePhotoSolutionChange}
            >
              {weddingPageNode.photoSolutions.map((node, index) => (
                <FormControlLabel
                  label=""
                  value={node.title}
                  key={'phots-' + index}
                  control={
                    <SelectionCard
                      summary
                      selected={
                        selectedPhotoSolution === node.title.toUpperCase()
                      }
                      node={node}
                      onClick={() =>
                        setSelectedPhotoSolution(
                          selectedPhotoSolution === node.title.toUpperCase()
                            ? null
                            : node.title.toUpperCase()
                        )
                      }
                    />
                  }
                />
              ))}
            </RadioSlider>

            <h2>Video</h2>
            <RadioSlider
              aria-label="foto"
              name="Videopakke"
              value={selectedVideoSoluton}
              onChange={handleVideoSolutionChange}
            >
              {weddingPageNode.videoSolutions.map((node, index) => (
                <FormControlLabel
                  label=""
                  value={node.title}
                  key={'vids-' + index}
                  control={
                    <SelectionCard
                      summary
                      selected={
                        selectedVideoSoluton === node.title.toUpperCase()
                      }
                      node={node}
                      onClick={() =>
                        setSelectedVideoSolution(
                          selectedVideoSoluton === node.title.toUpperCase()
                            ? null
                            : node.title.toUpperCase()
                        )
                      }
                    />
                  }
                />
              ))}
            </RadioSlider>

            <h2>Tilleggsvalg</h2>
            <RadioSlider
              aria-label="foto"
              name="Tileggsvalg"
              value={selectedVideoSoluton}
              onChange={handleExtraSolutionChange}
              /* URGENT: Not multiselectable */
            >
              {weddingPageNode.extras.map((node, index) => (
                <FormControlLabel
                  key={'extr-' + index}
                  label=""
                  value={node.title}
                  control={
                    <SelectionCard
                      summary
                      selected={
                        selectedExtraSoluton === node.title.toUpperCase()
                      }
                      node={node}
                      onClick={() =>
                        setSelectedExtraSolution(
                          selectedExtraSoluton === node.title.toUpperCase()
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

export default BookingPage

export const pageQuery = graphql`
  query {
    contentfulBryllupsside(key: { eq: "weddingpage" }) {
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
