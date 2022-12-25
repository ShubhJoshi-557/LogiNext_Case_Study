import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import {
  Heart,
  HeartFill,
  Pencil,
  TrashFill,
  Envelope,
  Telephone,
  Globe,
} from "react-bootstrap-icons";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const CardComponent = ({
  user,
  setDelete: handleDelete,
  setEdit: handleEdit,
}) => {
  const [like, setLike] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCloseDelete = () => setShowDeleteModal(false);
  const handleCloseEdit = () => setShowEditModal(false);

  const toggle = () => {
    setLike(!like);
  };

  const handleDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteCard = () => {
    handleDelete(user.id);
    setShowDeleteModal(false);
  };

  const handleEditModal = () => {
    setShowEditModal(true);
  };

  const handleEditCard = (newUser) => {
    handleEdit(newUser);
    setShowEditModal(false);
  };

  return (
    <Card>
      <DeleteModal
        show={showDeleteModal}
        handleClose={handleCloseDelete}
        handleDelete={() => handleDeleteCard(user.id)}
      />
      <EditModal
        user={user}
        show={showEditModal}
        handleClose={handleCloseEdit}
        handleEdit={handleEditCard}
      />
      <Card.Header className="p-0">
        <Card.Img
          variant="top"
          style={{ height: "10rem" }}
          src={
            "https://avatars.dicebear.com/v2/avataaars/" +
            user.name +
            ".svg?options[mood][]=happy"
          }
        />
      </Card.Header>
      <Card.Body style={{ fontSize: "15px" }}>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <Envelope /> &nbsp;{user.email}
        </Card.Text>
        <Card.Text>
          <Telephone /> &nbsp;{user.phone}
        </Card.Text>
        <Card.Text>
          <Globe /> &nbsp;{user.website}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="bg-white" onClick={toggle}>
          {like ? <HeartFill color="red" /> : <Heart color="red" />}
        </Button>
        <Button variant="bg-white" onClick={() => handleEditModal(user)}>
          <Pencil />
        </Button>
        <Button variant="bg-white" onClick={() => handleDeleteModal()}>
          <TrashFill />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardComponent;
