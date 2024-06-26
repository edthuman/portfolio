import "./MusicPage.css"

function MusicPage() {
    return <section className="hobbies-sub-page" id="music-page" tabIndex={0}>
        <h2 className="hobby-heading" id="music-page-heading">Music</h2>
        <section id="music-text-area">
            <p className="music-page-text">I love to discover new songs, artists, or genres.</p>
            <p className="music-page-text">An especially good source for obscure music has been the app <a href="https://musicboard.app/" target="blank" className="page-link">MusicBoard</a>, which I'm also using to keep track of what I've listened to.</p>
            <p className="music-page-text">You can view a list of every album I've ever listened to on my <a href="https://musicboard.app/edthuman/albums" target="blank" className="page-link">profile</a>. In 2023, I listened to 600 new albums!</p>
        </section>
    </section>
}

export default MusicPage