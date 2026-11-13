import { Fragment } from "react";

function TechName({ name, className }) {
	const words = name.split(/\s+/);

	return (
		<p className={className}>
			{words.map((word, index) => (
				<Fragment key={`${word}-${index}`}>
					{index > 0 ? " " : null}
					<span>{word}</span>
				</Fragment>
			))}
		</p>
	);
}

export default TechName;
