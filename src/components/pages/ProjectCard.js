import React from "react";

function ProjectCard({ project }) {
  const {description, deploy, image, repo, title} = project
  return (
    <ul className="list-group">
      <div className="card">
        <img src={image} style={{width: "25rem"}} className="card-img-top projects-image" alt="project screenshot" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-body">
          <a href={repo} className="card-link" rel="noreferrer" target="_blank">
            Repo
          </a>
          <a href={deploy} className="card-link" rel="noreferrer" target="_blank">
            Deploy
          </a>
        </div>
      </div>
    </ul>
  );
}

export default ProjectCard;