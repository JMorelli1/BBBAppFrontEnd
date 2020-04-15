import React, { useState } from "react";
import { Button, Form, Container } from "reactstrap";
import DisplayAlert from "../../../components/DisplayAlert.js";
import EditFormInput from "../../../components/EditFormInput.js";
import { createUser } from "../../../services/UserService.js";

const UserCreatePage = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const userInfo = {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
    };
    await createUser(newUser).then((isCreated) => {
      if (isCreated) {
        setDisplayAlert(true);
        setAlertStatus("success");
        setAlertMessage("You have successfully created a new user!");
      } else {
        setDisplayAlert(true);
        setAlertStatus("fail");
        setAlertMessage("Error creating a new user!");
      }
    });
  };

  return (
    <div style={{ textAlign: "left" }}>
      <Container style={{ marginTop: 30 }}>
        <DisplayAlert
          status={alertStatus}
          showAlert={displayAlert}
          message={alertMessage}
        />
        <Form onSubmit={handleSubmit}>
          <EditFormInput
            name="firstName"
            label="First Name"
            defaultValue={userInfo.firstName}
          />
          <EditFormInput
            name="lastName"
            label="Last Name"
            defaultValue={userInfo.lastName}
          />
          <EditFormInput name="email" label="Email" value={userInfo.email} />
          <EditFormInput
            name="phoneNumber"
            label="Phone Number"
            defaultValue={userInfo.phoneNumber}
          />
          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UserCreatePage;
