import React, { useState, useEffect } from "react";
import { Row, Container } from "reactstrap";
import UserAndJobCardList from "../../components/UserAndJobCardList";
import { loadAllUserData } from "../../services/UserService.js";

const UserPage = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setUser([]);
      await loadAllUserData().then((userData) => {
        if (userData) {
          setUser(userData);
        }
      });
    };
    loadData();
  }, []);

  const refreshPage = () => {
    window.location.reload(true);
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Row sm={2}>
        <UserAndJobCardList users={users} refreshPage={refreshPage} />
      </Row>
    </Container>
  );
};
export default UserPage;
