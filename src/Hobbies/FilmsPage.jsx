import "./FilmsPage.css";

function FilmsPage() {
	return (
		<section className="hobbies-sub-page" id="films-page" tabIndex={0}>
			<h2 className="hobby-heading" id="film-page-heading">
				Films
			</h2>
			<section id="film-text-area">
				<p className="film-page-text">
					I am definitely a bit of a film nerd, and I love going to
					the cinema.
				</p>
				<p className="film-page-text">
					When watching movies at home, I particularly enjoying
					watching a director's filmography in chronological order.
					It's interesting to see their craft develop over time, plus
					catching films that I would likely otherwise not bother to
					see.
				</p>
				<p className="film-page-text">
					The director I did this with most recently was Akira
					Kurosawa, with Ikiru being my favourite of his works.
				</p>
				<p className="film-page-text">
					You can check out what I've been watching on my Letterboxd{" "}
					<a
						href="https://letterboxd.com/edthuman"
						target="blank"
						className="page-link"
					>
						account
					</a>
					.
				</p>
			</section>
		</section>
	);
}

export default FilmsPage;
