import "./MusicPage.css";

function MusicPage() {
	return (
		<section className="hobbies-sub-page" id="music-page" tabIndex={0}>
			<h2 className="hobby-heading" id="music-page-heading">
				Music
			</h2>
			<section id="music-text-area">
				<p className="music-page-text">
					I love to discover new songs, artists, and genres.
				</p>
				<p className="music-page-text">
					I find the{" "}
					<a
						href="https://musicboard.app/"
						target="blank"
						className="page-link"
					>
						MusicBoard
					</a>{" "}
					app to be an especially good way of finding new music, plus
					it also helps me keep track of what I've been listening to.
				</p>
				<p className="music-page-text">
					You can view a list of albums I've listened to on my{" "}
					<a
						href="https://musicboard.app/edthuman/albums"
						target="blank"
						className="page-link"
					>
						profile
					</a>
					. Since I joined MusicBoard in 2023, I've listened to over a
					thousand new albums!
				</p>
			</section>
		</section>
	);
}

export default MusicPage;
