import "./Contacts.css"

function Contacts() {
    return <section className="page" id="contacts-page" tabIndex={0}>
        <h2 id="contacts-heading">Still want to know more?</h2>
        <p className="contacts-subheading">You can check out my <a href="https://github.com/edthuman" target="blank" className="contacts-page-link">GitHub</a> profile</p>
        <p className="contacts-subheading">Or connect with me on <a href="https://www.linkedin.com/in/edwardirvine" target="blank" className="contacts-page-link">LinkedIn</a>, I'm always happy to chat :)</p>
    </section>
}

export default Contacts