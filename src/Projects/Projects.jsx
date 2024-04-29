import ProjectList from "./ProjectList/ProjectList"
import "./Projects.css"

function Projects() {
    return <section id="projects" className="page" tabIndex={0}>
            <h2>Projects</h2>
            <p className="subheading">
                Click on a project preview to read more
            </p>
            <ProjectList/>
        </section>
}

export default Projects