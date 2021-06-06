import React from 'react'
import styled from 'styled-components'
import Image from '../../../components/gallery/image'
import { Container, Section } from '../../../components/layout/layout'
import MDRenderer from '../../../components/md/MDRenderer'
import { HomePageQueryNode } from '../../../pages/indexx'

interface PresentationSectionProps {
  node: HomePageQueryNode
}

const PresentationSection = ({ node }: PresentationSectionProps) => {
  return (
    <Section large>
      <Container>
        <PresentationGrid>
          <TextWrapper>
            <MDRenderer>{node.presentation}</MDRenderer>
          </TextWrapper>
          <Image imageData={node.profilePicture} maxheight="20rem" />
        </PresentationGrid>
      </Container>
    </Section>
  )
}

const PresentationGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextWrapper = styled.div`
  max-width: 20rem;
  margin-right: 4rem;
  & > * {
    margin: 1rem 0;
  }
`

export default PresentationSection
