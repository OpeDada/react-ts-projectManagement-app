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
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="enter name" />

      <label htmlFor="description">Project Description</label>
      <textarea name="description" id="" placeholder="enter description"></textarea>

      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter budget" />

      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" />

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span></span>
        <button type="button" className="bordered medium">Cancel</button>
      </div>
    </form>
  )
}
