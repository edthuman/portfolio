import ProjectCard from "./PorfolioCard"
import * as data from "./data/project-details.json"
import "./ProjectList.css"

function ProjectList() {
    const projectDetails = data.projects

    return <section id="projects-list">
        {projectDetails.map((project) => <ProjectCard project={project} key={project.name}/>)}
    </section>
}

export default ProjectList