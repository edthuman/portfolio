import { useEffect } from "react";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Technologies from "./Technologies/Technologies";
import Hobbies from "./Hobbies/Hobbies";
import Contacts from "./Contacts/Contacts";

function App() {
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
			const tag = e.target.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

			const horizontalSections = ["technologies", "hobbies-section"]
				.map((id) => document.getElementById(id))
				.filter(Boolean);

			const activeSection = horizontalSections.find((section) => {
				const rect = section.getBoundingClientRect();
				return Math.abs(rect.top) < 5;
			});

			if (activeSection) {
				e.preventDefault();
				activeSection.scrollBy({
					left:
						e.key === "ArrowRight"
							? activeSection.clientWidth
							: -activeSection.clientWidth,
					behavior: "smooth",
				});
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<main>
			<Home />
			<About />
			<Projects />
			<Technologies />
			<Hobbies />
			<Contacts />
		</main>
	);
}

export default App;
