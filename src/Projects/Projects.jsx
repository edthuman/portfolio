import ProjectList from "./ProjectList/ProjectList"
import "./Projects.css"

function Projects() {
    return <section id="projects" className="page">
            <h2>Projects</h2>
            <p id="projects-subheading">
                Click on a project's preview to read more about it
            </p>
            <ProjectList id="projects-scrollbar"/>
        </section>
}

export default Projects