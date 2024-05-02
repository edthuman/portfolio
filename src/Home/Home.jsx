import "./Home.css"
import githubLogo from "../assets/github-logo.png"
import linkedInLogo from "../assets/linkedin-logo.png"

function Home () {
    return <section className="page">
        <section id="links">
            <a className="social-link" href="https://github.com/edthuman" target="blank">
                <img src={githubLogo} alt="GitHub logo" className="social-logo"/>
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/edwardirvine" target="blank" id="linkedin-link">
                <img src={linkedInLogo} alt="LinkedIn logo" className="social-logo" />
            </a>
        </section>
        <section id="home">
            <h1>Hi, I'm Ed</h1>
            <p className="home-text" id="software-dev-text">Junior Software Developer</p>
            <footer id="home-footer">
                <p className="home-text" id ="scroll-down-text">Scroll down to learn more about me!</p>
                <p className="home-text" id="down-arrow">↓</p>
            </footer>
        </section>
    </section>
}

export default Home