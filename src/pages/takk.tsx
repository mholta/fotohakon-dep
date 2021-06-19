import React from 'react'
import Footer from '../components/footer'
import SEO from '../components/seo'

interface PostSubmissionPageProps {}

const PostSubmissionPage = ({}: PostSubmissionPageProps) => {
  return (
    <div>
      <SEO title="Takk" />
      {`Takk <3`}
      <Footer />
    </div>
  )
}

export default PostSubmissionPage
