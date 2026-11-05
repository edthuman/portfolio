import "./LondonClassicsPage.css"

function LondonClassics() {
    return <section className="hobbies-sub-page" id="london-classics-page" tabIndex={0}>
        <h2 className="hobby-heading" id="london-classics-heading">London Classics</h2>
        <section id="london-classics-text-area">
            <p className="london-classics-text">I am currently in the progress of trying to earn a <a href="https://www.londonmarathonevents.co.uk/london-classics/about-london-classics" className="page-link">London Classics</a> medal. In order to receive one, someone has to complete 3 challenges: the London Marathon, the RideLondon 100 and the Swim Serpentine.</p>
            <p className="london-classics-text">In September 2026 I completed the two-mile Swim Serpentine in 1:24:11, beating my goal time by nearly six minutes.</p>
            <p className="london-classics-text">Since 2024, RideLondon has been indefinitely paused, with riders allowed to substitute it for the 66-mile <a href="https://www.caledoniangroupevents.co.uk/etape-loch-ness" className="page-link">Etape Loch Ness</a>. A friend and I are signed up to take it on in April 2027.</p>
            <p className="london-classics-text">I plan to enter the ballot for the 2028 London Marathon, which I would run for a charity.</p>
        </section>
    </section>
}

export default LondonClassics