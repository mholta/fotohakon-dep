import { navigate } from 'gatsby-link'
import React from 'react'
import Footer from '../components/footer'
import SEO from '../components/seo'

const NotFoundPage = () => {
  if (typeof window !== `undefined`) navigate('/')
  return (
    <main>
      <SEO title="Ikke funnet" />
      404
      <Footer />
    </main>
  )
}

export default NotFoundPage
