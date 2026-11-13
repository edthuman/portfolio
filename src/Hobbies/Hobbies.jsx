import "./Hobbies.css";
import BooksPage from "./BooksPage";
import FilmsPage from "./FilmsPage";
import HobbiesTitlePage from "./HobbiesTitlePage";
import LondonClassicsPage from "./LondonClassicsPage";
import MiscellaneousPage from "./MiscellaneousPage";
import MusicPage from "./MusicPage";

function Hobbies() {
	return (
		<section className="page" id="hobbies-section" tabIndex={0}>
			<HobbiesTitlePage />
			<LondonClassicsPage />
			<MusicPage />
			<BooksPage />
			<FilmsPage />
			<MiscellaneousPage />
		</section>
	);
}

export default Hobbies;
