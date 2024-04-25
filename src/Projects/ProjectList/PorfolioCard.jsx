import "./PortfolioCard.css"

function ProjectCard({project}){
    return <button className="project-card" onClick={(e)=>console.log(project.name)}>
        <h3>{project.name}</h3>
        <img src={`${project.img}.png`} alt={project.altText} className="project-image-preview"/>
        <p className="project-description">{project.briefDescription}</p>
    </button>
}

export default ProjectCard