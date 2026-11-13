import "./MiscellaneousPage.css";

function MiscellaneousPage() {
	return (
		<section className="hobbies-sub-page" tabIndex={0}>
			<h2 className="hobby-heading" id="miscellaneous-page-heading">
				Miscellaneous
			</h2>
			<section id="miscellaneous-text-area">
				<p className="miscellaneous-page-text">
					I enjoy trying different foods. If I can, I like to cook at
					least one new recipe each week - usually found in a cookbook
					or on YouTube.
				</p>
				<p className="miscellaneous-page-text">
					I love to play video games, especially with my girlfriend
					Mary. My favourite series are The Last of Us, Red Dead
					Redemption, and Jak and Daxter.
				</p>
				<p className="miscellaneous-page-text">
					I performed stand up a few times whilst at uni, but more
					recently have been interested in improv. I began attending
					improv courses in 2025, but have not yet performed it in
					front of a crowd.
				</p>
			</section>
		</section>
	);
}

export default MiscellaneousPage;
