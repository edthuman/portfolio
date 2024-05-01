import ProjectList from "./ProjectList/ProjectList"
import "./Projects.css"

function Projects() {
    return <section id="projects" className="page" tabIndex={0}>
            <h2 id="projects-heading">Projects</h2>
            <p className="subheading" id="projects-subheading">
                Scroll across to see any hidden projects, or click on a project to read more about it
            </p>
            <ProjectList/>
        </section>
}

export default Projects