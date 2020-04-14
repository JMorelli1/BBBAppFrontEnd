import React, { useState } from "react";
import { Button, Form, Container } from "reactstrap";
import DisplayAlert from "../../components/DisplayAlert.js";
import EditFormInput from "../../components/EditFormInput.js";
import { createUser } from "../../services/UserService.js";

const UserCreatePage = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const userInfo = {};

  const setAlert = () => {
    setAlertStatus("success");
    setAlertMessage("Congragulations, you successfully create a user!");
    setDisplayAlert(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      userId: event.target.userId.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
    };
    await createUser(newUser).then((isCreated) => {
      if (isCreated) {
        setAlert(true);
        setAlertStatus("success");
        setAlertMessage("You have successfully created a new user!");
      } else {
        setAlert(true);
        setAlertStatus("fail");
        setAlertMessage("Error creating a new user!");
      }
    });
    console.log(newUser);
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
            name="userId"
            label="User ID"
            value={userInfo.userId}
          />
          <EditFormInput
            name="firstName"
            label="First Name"
            value={userInfo.firstName}
          />
          <EditFormInput
            name="lastName"
            label="Last Name"
            value={userInfo.lastName}
          />
          <EditFormInput name="email" label="Email" value={userInfo.email} />
          <EditFormInput
            name="phoneNumber"
            label="Phone Number"
            value={userInfo.phoneNumber}
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
