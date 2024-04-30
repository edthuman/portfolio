import "./FilmsPage.css"

function FilmsPage() {
    return <section className="hobbies-sub-page" id="films-page" tabIndex={0}>
        <h2 className="hobby-heading">Films</h2>
        <p className="film-page-text">It's fair to say I'm a bit of a film nerd.</p>
        <p className="film-page-text">I frequently visit the cinema to see new releases.</p>
        <p className="film-page-text">At home, I like to chronologically make my way through a director's filmography - both to see how their craft developed over time, as well as checking out some films that I would otherwise not bother watching.</p>
        <p className="film-page-text">The director I'm currently on is Akira Kurosawa (most known for Seven Samurai). His film Ikiru is my favourite thus far.</p>
        <p className="film-page-text">You can check out what I've been watching on my Letterboxd <a href="https://letterboxd.com/edthuman" target="blank" className="page-link">account</a>.</p>
    </section>
}

export default FilmsPage