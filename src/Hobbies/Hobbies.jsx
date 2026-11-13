import "./Hobbies.css";
import BooksPage from "./BooksPage/BooksPage";
import FilmsPage from "./FilmsPage/FilmsPage";
import HobbiesTitlePage from "./HobbiesTitlePage/HobbiesTitlePage";
import LondonClassicsPage from "./LondonClassicsPage/LondonClassicsPage";
import MiscellaneousPage from "./MiscellaneousPage/MiscellaneousPage";
import MusicPage from "./MusicPage/MusicPage";

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
