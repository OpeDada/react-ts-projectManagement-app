import React, { useState } from 'react'
import { Project } from './Project'
import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps){
  const [projectBeingEdited, setprojectBeingEdited] = useState({})

  const handleEdit = (project: Project) => {
    setprojectBeingEdited(project)
  };

  const cancelEditing = () => {
    setprojectBeingEdited({})
  }

  return (
    <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="cols-sm">
            {project === projectBeingEdited ? (
              <ProjectForm onCancel={cancelEditing}/>
            ) : (
              <ProjectCard project={project} onEdit={handleEdit} />
            )}
          </div>
        ))}
    </div>
  )
}
