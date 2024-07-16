import React from 'react'
import { MOCK_PROJECTS } from './MockProjects'

export default function ProjectPage() {
  return (
    <>

    <h1>Projects</h1>
      <pre>{JSON.stringify(MOCK_PROJECTS, null, '')}</pre>
    </>
  )
}
