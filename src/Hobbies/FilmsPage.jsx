import "./FilmsPage.css"

function FilmsPage() {
    return <section className="hobbies-sub-page" id="films-page" tabIndex={0}>
        <h2 className="hobby-heading" id="film-page-heading">Films</h2>
        <section id="film-text-area">
            <p className="film-page-text">It's fair to say I'm a bit of a film nerd.</p>
            <p className="film-page-text">I frequently visit the cinema to see new releases.</p>
            <p className="film-page-text">At home, I like to make my way chronologically through a director's filmography - to see how their craft developed over time, plus seeing films that I would otherwise probably never bother to watch.</p>
            <p className="film-page-text">The director I did this with most recently was Akira Kurosawa (most known for Seven Samurai). Ikiru was my favourite of his works.</p>
            <p className="film-page-text">You can check out what I've been watching on my Letterboxd <a href="https://letterboxd.com/edthuman" target="blank" className="page-link">account</a>.</p>
        </section>
    </section>
}

export default FilmsPage