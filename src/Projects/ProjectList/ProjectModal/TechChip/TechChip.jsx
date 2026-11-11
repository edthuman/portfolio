import "./TechChip.css";
import techIcons, { darkTechIcons } from "./techIcons";

function TechChip({ name }) {
	const Icon = techIcons[name];

	return (
		<li className="tech-chip">
			{name}
			{Icon && (
				<Icon
					className={`tech-chip-icon${darkTechIcons.has(name) ? " tech-chip-icon-dark" : ""}`}
					aria-hidden="true"
				/>
			)}
		</li>
	);
}

export default TechChip;
