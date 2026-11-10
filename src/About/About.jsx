import "./About.css";

function About() {
	return (
		<section id="about" className="page" tabIndex={0}>
			<div className="about-content">
				<h2 id="about-heading">About Me</h2>
				<section id="about-body">
					<p className="about-text">
						After graduating from a Psychology degree, I ended up working as a customer service advisor both NHS 119 (Coronavirus adviceline), and HM Passport Office.
					</p>
					<p className="about-text">
						After seeing government adverts about cybersecurity jobs, I took the {" "}
						<a
							className="page-link"
							href="https://www.coursera.org/professional-certificates/google-cybersecurity"
							target="blank"
						>
							Google Cybersecurity Professional Certificate
						</a>{" "}
						course. It included some Python and SQL coding, which I enjoyed so much, I decided to look at ways to get into software engineering.
					</p>
					<p className="about-text">
						In late 2023, I used a {" "}
						<a
							className="page-link"
							href="https://www.w3schools.com"
							target="blank"
						>
							W3Schools
						</a>
						'{" "}
						<a
							className="page-link"
							href="https://www.w3schools.com/html"
							target="blank"
						>
							tutorial
						</a>{" "}
						to teach myself HTML.
					</p>
					<p className="about-text">
						I attended{" "}
						<a
							className="page-link"
							href="https://northcoders.com"
							target="blank"
						>
							Northcoders
						</a>
						'{" "}
						<a
							className="page-link"
							href="https://northcoders.com/our-courses/skills-bootcamp-in-software-development"
							target="blank"
						>
							Software Development Bootcamp
						</a>{" "}
						in 2024 - spending 13 weeks learning the fundamentals of
						Full Stack Development.
					</p>
					<p className="about-text">
						In January 2025 I joined a startup,{" "}
						<a
							className="page-link"
							href="https://edifysystems.io/"
							target="blank"
						>
							Edify Systems
						</a>
						. There I worked on a web app for quick service restaurants to manage their back of house operations - including placing orders, counting stock, planning food production, and analysing business performance.
					</p>
				</section>
			</div>
		</section>
	);
}

export default About;
