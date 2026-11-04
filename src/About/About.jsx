import "./About.css"

function About() {
    return <section id="about" className="page" tabIndex={0}>
                <h2 id="about-heading">About Me</h2>
            <section id="about-body">
                <p className="about-text">I studied Psychology at university.</p>
                <p className="about-text">I began my journey into Software Development in late 2023, using <a className="page-link" href="https://www.w3schools.com" target="blank">W3Schools</a>' <a className="page-link" href="https://www.w3schools.com/html" target="blank">tutorial</a> to teach myself HTML.</p>
                <p className="about-text">I attended <a className="page-link" href="https://northcoders.com" target="blank">Northcoders</a>' <a className="page-link" href="https://northcoders.com/our-courses/skills-bootcamp-in-software-development" target="blank">Software Development Bootcamp</a> in 2024 - spending 13 weeks learning the fundamentals of Full Stack Development.</p>
                <p className="about-text">In January 2025 I joined a startup, <a className="page-link" href="https://edifysystems.io/" target="blank">Edify Systems</a>, working on a web app for quick service restaurants to manage back of house operations - including placing orders, counting stock, planning food production, and analysing business performance.</p>
                <p className="about-text">Keep scrolling to learn more about the projects I've worked on!</p>
            </section>
        </section>
}

export default About