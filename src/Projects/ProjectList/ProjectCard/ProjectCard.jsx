import "./ProjectCard.css";
import React from "react";
import ProjectModal from "../ProjectModal/ProjectModal";

function ProjectCard({ project }) {
	const [modalIsOpen, setModalIsOpen] = React.useState(false);

	function openModal() {
		setModalIsOpen(true);
	}

	function closeModal() {
		setModalIsOpen(false);
	}

	return (
		<>
			<button className="project-card" onClick={openModal}>
				<h3 className="project-card-title">{project.name}</h3>
				<img
					src={`${project.img}.png`}
					alt={project.altText}
					className="project-image-preview"
				/>
				<p className="project-description">
					{project.briefDescription}
				</p>
			</button>
			<ProjectModal
				project={project}
				isOpen={modalIsOpen}
				onClose={closeModal}
			/>
		</>
	);
}

export default ProjectCard;
