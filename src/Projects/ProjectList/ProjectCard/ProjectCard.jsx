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
				<div className="project-image-frame">
					<img
						src={`${project.img}.png`}
						alt={project.altText}
						className="project-image-preview"
					/>
				</div>
				<div className="project-card-body">
					<h3 className="project-card-title">{project.name}</h3>
					<p className="project-description">
						{project.briefDescription}
					</p>
					<span className="project-card-cta" aria-hidden="true">
						View details <span className="project-card-arrow">→</span>
					</span>
				</div>
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
