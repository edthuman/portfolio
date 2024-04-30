import "./Technologies.css"
import TechnologyGrid from "./TechnologyGrid/TechnologyGrid"

function Technologies() {
    return <section id="technologies" className="page" tabIndex={0}>
        <h2 id="technologies-heading">Technologies</h2>
        <p className="subheading" id="technologies-subheading">The tech I have experience using</p>
        <TechnologyGrid/>
    </section>
}

export default Technologies