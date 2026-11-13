import "./BooksPage.css";

function BooksPage() {
	return (
		<section className="hobbies-sub-page" id="books-page" tabIndex={0}>
			<h2 className="hobby-heading">Books</h2>
			<section id="books-text-area">
				<p className="books-page-text">
					Shortly before the first COVID-19 lockdown, I rediscovered a
					love of reading.
				</p>
				<p className="books-page-text">
					My favourite book is War and Peace. As well as being a
					well-written story, I loved that Tolstoy takes sizeable
					detours from the narrative to speak directly to the reader,
					correcting the inaccuracies of historians - in one case
					based on his first-hand experience of a battle.
				</p>
			</section>
		</section>
	);
}

export default BooksPage;
