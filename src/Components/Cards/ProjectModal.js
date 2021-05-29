import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

export default function ProjectModal({ showModal, setShowModal, ...project }) {
  const toggle = () => setShowModal(!showModal);
  return (
    <div>
      {showModal && <Modal id='modal' isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{project.title}</ModalHeader>
        <ModalBody>
          <p>{project.overview}</p>
          <hr/>
          <h5>Built with:</h5>
          <p>{project.tech}</p>
        </ModalBody>
        <ModalFooter>
          <a href={project.github} target="_blank" rel="noreferrer">Repo</a>
          <br></br>
          <a href={project.url} target="_blank" rel="noreferrer">Netlify App</a>
        </ModalFooter>
      </Modal>
      }
    </div>
  );
}

ProjectModal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  project: PropTypes.object
};
