import React from 'react'
import { Container } from '../../components/layout/layout'
import { HomePageQueryNode } from '../../pages'
import HeaderWrapper from './components/headerWrapper'
import PresentationSection from './components/presentationSection'

interface HomePageProps {
  node: HomePageQueryNode
}

const HomePage = ({ node }: HomePageProps) => {
  return (
    <>
      <Container>
        <HeaderWrapper node={node} />
      </Container>
      <PresentationSection node={node} />
    </>
  )
}

export default HomePage
