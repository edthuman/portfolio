import "./Hobbies.css"
import HobbiesTitlePage from "./HobbiesTitlePage"
import MusicPage from "./MusicPage"
import BooksPage from "./BooksPage"
import FilmsPage from "./FilmsPage"
import MiscellaneousPage from "./MiscellaneousPage"

function Hobbies() {
    return <section className="page" id="hobbies-section">
    <HobbiesTitlePage/>
    <MusicPage/>
    <BooksPage/>
    <FilmsPage/>
    <MiscellaneousPage/>
    </section>
}

export default Hobbies