import { Project } from "./Project"

function formatDescription(description: string): string{
  return description.substring(0, 60) + '...'
}

interface ProjectCardProps{
  project: Project
}

export default function ProjectForm(props: ProjectCardProps){
const { project } = props;

  return (
    <form className="input-group vertical">
      <label htmlFor="name">{project.name}</label>
      <input type="text" name="name" placeholder="enter name" />
      <label htmlFor="description">{formatDescription(project.description)}</label>

      <textarea name="description" id="" placeholder="enter description"></textarea>
      <label htmlFor="budget">Budget: {project.budget.toLocaleString()}</label>
    </form>
  )
}
