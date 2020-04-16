import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteUser } from "../services/UserService";
import { deleteJob } from "../services/JobService";

const DeleteButton = (props) => {
  const [modal, setModal] = useState(false);

  const handleClick = async () => {
    if (props.deletedItem === "Job") {
      await deleteJob(props.selectedId).then((isDeleted) => {
        if (isDeleted) {
          toggle();
          props.refreshPage();
        }
      });
    } else if (props.deletedItem === "User") {
      await deleteUser(props.selectedId).then((isDeleted) => {
        if (isDeleted) {
          toggle();
          props.refreshPage();
        }
      });
    }
  };

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button style={{ margin: 10 }} onClick={toggle} color="danger">
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Delete Task</ModalHeader>
        <ModalBody>
          Are you certain you wish to delete this {props.deletedItem}?
        </ModalBody>
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
