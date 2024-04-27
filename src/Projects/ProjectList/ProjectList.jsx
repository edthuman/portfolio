import ProjectCard from "./ProjectCard"
import * as data from "./data/project-details.json"
import "./ProjectList.css"
import { useRef } from "react";

function ProjectList() {
    const projectDetails = data.projects
    const scrollBar = useRef();

    function handleScroll(scrollAmount) {
        const newScrollPosition = scrollBar.current.scrollLeft + scrollAmount;

        if((newScrollPosition + 200) >= 0 && newScrollPosition <= (scrollBar.current.scrollLeftMax + 200)){ 
            scrollBar.current.scrollLeft = newScrollPosition;
        }
    };

    return <section id="projects-buttons">
        <button className="scroll-button" onClick={() => handleScroll(-200)}>{"<"}</button>
        <section id="projects-list" ref={scrollBar}>
            {projectDetails.map((project) => <ProjectCard project={project} key={project.name}/>)}
        </section>
        <button className="scroll-button" onClick={() => handleScroll(200
        )}>{">"}</button>
    </section>
}

export default ProjectList