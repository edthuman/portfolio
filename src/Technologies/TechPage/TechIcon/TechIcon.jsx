import "./TechIcon.css";
import TechName from "./TechName/TechName";

function TechIcon({ icon: Icon, name, abbreviation }) {
	if (!Icon) {
		const fallbackText = abbreviation ?? name;

		return (
			<div className="tech-icon-area">
				<div className="tech-fallback-icon" aria-hidden="true">
					<svg viewBox="0 0 100 100" role="presentation">
						<text
							x="50%"
							y="50%"
							textAnchor="middle"
							dominantBaseline="central"
							textLength={Math.min(80, fallbackText.length * 22)}
							lengthAdjust="spacingAndGlyphs"
						>
							{fallbackText}
						</text>
					</svg>
				</div>
				<TechName name={name} className="tech-name" />
			</div>
		);
	}

	return (
		<div className="tech-icon-area">
			<Icon className="tech-icon" aria-hidden="true" focusable="false" />
			<TechName name={name} className="tech-name" />
		</div>
	);
}

export default TechIcon;
