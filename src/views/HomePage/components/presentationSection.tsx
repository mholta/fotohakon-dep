import React from 'react'
import MDRenderer from '../../../components/md/MDRenderer'

interface PresentationSectionProps {
  node: any
}

const PresentationSection = ({ node }: PresentationSectionProps) => {
  return (
    <main>
      <MDRenderer>{node.presentation}</MDRenderer>
    </main>
  )
}

export default PresentationSection
