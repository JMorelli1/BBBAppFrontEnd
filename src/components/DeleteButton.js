import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteUser } from "../services/UserService";

const DeleteButton = (props) => {
  const [modal, setModal] = useState(false);

  const handleClick = async () => {
    await deleteUser(props.selectedId).then((isDeleted) => {
      if (isDeleted) {
        toggle();
        props.refreshPage();
      }
    });
  };

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button style={{ margin: 10 }} onClick={toggle} color="danger">
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Delete Task</ModalHeader>
        <ModalBody>Are you certain you wish to delete this User?</ModalBody>
        <ModalFooter>
          <Button onClick={handleClick} color="danger">
            Delete
          </Button>
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteButton;
