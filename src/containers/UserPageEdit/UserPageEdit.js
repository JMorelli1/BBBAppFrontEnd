import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form, Container } from "reactstrap";
import { updateUser, loadUserData } from "../../services/UserService.js";
import DisplayAlert from "../../components/DisplayAlert.js";
import EditFormInput from "../../components/EditFormInput.js";

const UserPageEdit = () => {
  const { userId } = useParams();
  const history = useHistory();

  const [userInfo, setUserInfo] = useState({});
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const loadData = async () => {
      await loadUserData(userId).then((userData) => {
        if (!userData) {
          setAlertStatus("fail");
          setAlertMessage("There was an error uploading the user!");
          setDisplayAlert(true);
        } else {
          setUserInfo(userData);
        }
      });
    };
    loadData();
    return () => {
      console.log("unmounted");
    };
    // eslint-disable-next-line
  }, []);

  const setAlert = () => {
    setAlertStatus("success");
    setAlertMessage("Congragulations, you successfully updated user!");
    setDisplayAlert(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
    };
    await updateUser(userId, newUser).then((successfullyUpdated) => {
      if (successfullyUpdated) {
        setAlert();
      }
    });
  };

  return (
    <div style={{ textAlign: "left" }}>
      <Container>
        <Button
          onClick={() => {
            history.push("/users");
          }}
          color="secondary"
        >
          Return
        </Button>
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
          <EditFormInput
            name="email"
            label="Email"
            defaultValue={userInfo.email}
          />
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

export default UserPageEdit;
