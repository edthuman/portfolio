import "./TechnologyGrid.css"
import * as technologiesDetails from "./data/technologies-data.json"


function TechnologyGrid() {
    return <section id="technology-grid">
        {technologiesDetails.technologies.map((technology) => {
            return <section key={technology.type.toLowerCase()} id={technology.type.toLowerCase()}>
            <h3 className="grid-item-heading">{technology.type}</h3>
            <section className="grid-item-text-area">
                {technology.items.map((item, index) => <p key={`${item + "-" + index}`} className="grid-item-text">{item}</p>)}
            </section>
            </section>
        })}
    </section>
}

export default TechnologyGrid