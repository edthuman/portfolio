import "./Home.css"

function Home () {
    return <article>
        <section id="links">
            <a className="social-link" href="https://github.com/edthuman" target="blank">
                <img src="github-logo.png" alt="GitHub logo" className="social-logo"/>
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/edwardirvine" target="blank" id="linkedin-link">
                <img src="linkedin-logo.png" alt="LinkedIn logo" className="social-logo" />
            </a>
            <footer id="home-footer">
                <p className="home-text" id ="scroll-down-text">Scroll down to learn more and see what I've made!</p>
                <p className="home-text" id="down-arrow">↓</p>
            </footer>
        </section>
        <section id="home">
            <h1>Hi, I'm Ed</h1>
            <p className="home-text" id="software-dev-text">Junior Software Developer</p>
        </section>

    </article>
}

export default Home