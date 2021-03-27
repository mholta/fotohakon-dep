import React from 'react'
import { HomePageQueryNode } from '../../pages'
import HeaderSlider from './components/headerSlider'
import PresentationSection from './components/presentationSection'

interface HomePageProps {
  node: HomePageQueryNode
}

const HomePage = ({ node }: HomePageProps) => {
  return (
    <>
      <HeaderSlider node={node} speed={2} autoplay />
      <PresentationSection node={node} />
    </>
  )
}

export default HomePage
