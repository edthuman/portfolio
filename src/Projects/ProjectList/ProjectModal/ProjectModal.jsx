import "./ProjectModal.css";
import Modal from "react-modal";
import { CloseIcon, ExternalLinkIcon, GitHubIcon } from "./ModalIcons";
import TechChip from "./TechChip/TechChip";

Modal.setAppElement("#root");

function ProjectModal({ project, isOpen, onClose }) {
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
