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
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT")
				return;

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

	// In Chrome, zooming changes section sizes but leaves scroll offsets in
	// pixels (and doesn't reliably re-snap), so re-anchor each snap container
	// to the section it was showing.
	useEffect(() => {
		const main = document.querySelector("main");
		const containers = [
			{ el: main, axis: "Top", size: "clientHeight" },
			...["technologies", "hobbies-section"].map((id) => ({
				el: document.getElementById(id),
				axis: "Left",
				size: "clientWidth",
			})),
		].filter(({ el }) => el);

		const indexes = new Map(containers.map(({ el }) => [el, 0]));
		let lastResize = 0;

		const cleanups = containers.map(({ el, axis, size }) => {
			const onScroll = () => {
				// ignore scroll events caused by the resize itself
				if (Date.now() - lastResize < 200) return;
				indexes.set(el, Math.round(el[`scroll${axis}`] / el[size]));
			};
			el.addEventListener("scroll", onScroll, { passive: true });
			return () => el.removeEventListener("scroll", onScroll);
		});

		const onResize = () => {
			lastResize = Date.now();
			containers.forEach(({ el, axis, size }) => {
				el[`scroll${axis}`] = indexes.get(el) * el[size];
			});
		};

		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
			cleanups.forEach((cleanup) => cleanup());
		};
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
