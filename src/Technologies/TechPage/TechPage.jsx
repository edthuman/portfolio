import "./TechPage.css";

function TechPage({ name, children }) {
    return <section className="tech-sub-page" tabIndex={0}>
        <h2 className="tech-title">{name}</h2>
        <div className="tech-list">
            {children}
        </div>
    </section>;
}

export default TechPage;
