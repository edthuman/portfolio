import ProjectCard from "./ProjectCard"
import * as data from "./data/project-details.json"
import "./ProjectList.css"

function ProjectList() {
    const projectDetails = data.projects

    return <section id="projects-buttons">
        <section id="projects-list">
            {projectDetails.map((project) => <ProjectCard project={project} key={project.name}/>)}
        </section>
    </section>
}

export default ProjectList