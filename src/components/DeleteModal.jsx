import React from "react";
import { Button, Modal } from "react-bootstrap/";

const DeleteModal = ({ show, handleClose, handleDelete }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wait!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Card?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
