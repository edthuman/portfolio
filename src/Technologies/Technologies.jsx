import "./Technologies.css"
import TechnologyGrid from "./TechnologyGrid/TechnologyGrid"

function Technologies() {
    return <section id="technologies" className="page">
        <h2 id="technologies-heading">Technologies</h2>
        <p className="subheading" id="technologies-subheading">The technologies I have experience with</p>
        <TechnologyGrid/>
    </section>
}

export default Technologies