import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap/";

const EditModal = ({ user, show, handleClose, handleEdit }) => {
  const [newUser, setNewUser] = useState(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEdit(newUser);
  };

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={newUser.name}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={newUser.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                name="phone"
                defaultValue={newUser.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="website">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="url"
                name="website"
                defaultValue={newUser.website}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;
