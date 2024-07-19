import React from 'react'
import { MOCK_PROJECTS } from './MockProjects'
import ProjectList from './ProjectList'

export default function ProjectPage() {
  return (
    <>

    <h1>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  )
}
