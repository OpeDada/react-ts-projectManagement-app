import React, { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

export default function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectBeingEdited, setprojectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setprojectBeingEdited(project);
  };

  const cancelEditing = () => {
    setprojectBeingEdited({});
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited ? (
            <ProjectForm
              onSave={onSave}
              onCancel={cancelEditing}
              project={project}
            />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
}
