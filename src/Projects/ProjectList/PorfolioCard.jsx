import "./PortfolioCard.css"
import Modal from 'react-modal';
import React from 'react';

Modal.setAppElement("#root")

const customStyles = {
    overlay: {
        backgroundColor: "transparent",
    },
    content: {
      background: "rgb(32, 32, 32)",
      top: '50%',
      left: '50%',
      right: '10%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "70%",
    },
  };

function ProjectCard({project}){
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    function openModal() {
    setModalIsOpen(true);
    }

    function closeModal() {
    setModalIsOpen(false);
    }

    return <>
    <button className="project-card" onClick={openModal}>
        <h3>{project.name}</h3>
        <img src={`${project.img}.png`} alt={project.altText} className="project-image-preview"/>
        <p className="project-description">{project.briefDescription}</p>
    </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
        <h4>{project.name}</h4>
        <section className="modal-text-area">
            {project.fullDescription.paragraphs.map((paragraph, index) => <p key={`paragraph-${index}`} className="modal-text">{paragraph}</p>)}
            <p className="modal-text">Link to GitHub repo: <a href={project.githubLink} target="blank" className="modal-link">{project.githubLink}</a></p>
            {project.hosted ? <p className="modal-text">Link to {project.name === "EcoQuest" ? "project on the Northcoders website" : "hosted project"}: <a href={project.hostedLink} target="blank" className="modal-link">{project.hostedLink}</a></p> : null}
        </section> 
        <section className="modal-button-area">
            <button onClick={closeModal} className="modal-button">Close</button>
        </section>
        </Modal>
    </>
}

export default ProjectCard