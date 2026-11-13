import "./ProjectModal.css";
import { useEffect } from "react";
import Modal from "react-modal";
import { CloseIcon, ExternalLinkIcon, GitHubIcon } from "./ModalIcons";
import TechChip from "./TechChip/TechChip";

Modal.setAppElement("#root");

function updateZoom() {
	const ratio = window.outerWidth / window.innerWidth;
	const zoom = ratio > 0.2 && ratio < 6 ? ratio : 1;
	document.documentElement.style.setProperty("--page-zoom", zoom);
}

function ProjectModal({ project, isOpen, onClose }) {
	useEffect(() => {
		if (!isOpen || window.matchMedia("(pointer: coarse)").matches) return;
		updateZoom();
		window.addEventListener("resize", updateZoom);
		return () => {
			window.removeEventListener("resize", updateZoom);
			document.documentElement.style.removeProperty("--page-zoom");
		};
	}, [isOpen]);

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			className="modal-content"
			overlayClassName="modal-overlay"
			contentLabel={project.name}
		>
			<header className="modal-header">
				<h4 className="modal-title">{project.name}</h4>
				<a
					href={project.githubLink}
					target="_blank"
					rel="noreferrer"
					className="modal-icon-button"
					aria-label="View GitHub repository"
					title="GitHub repository"
				>
					<GitHubIcon />
				</a>
				{project.hosted && (
					<a
						href={project.hostedLink}
						target="_blank"
						rel="noreferrer"
						className="modal-icon-button"
						aria-label="Visit hosted project"
						title="Hosted project"
					>
						<ExternalLinkIcon />
					</a>
				)}
				<button
					onClick={onClose}
					className="modal-icon-button"
					aria-label="Close"
					title="Close"
				>
					<CloseIcon />
				</button>
			</header>
			<section className="modal-text-area">
				<ul className="modal-tech-stack" aria-label="Tech used">
					{project["tech-used"].map((tech) => (
						<TechChip key={tech} name={tech} />
					))}
				</ul>
				{project.fullDescription.paragraphs.map((paragraph, index) => (
					<p key={`paragraph-${index}`} className="modal-text">
						{paragraph}
					</p>
				))}
			</section>
		</Modal>
	);
}

export default ProjectModal;
