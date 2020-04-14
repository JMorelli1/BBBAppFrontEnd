import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "reactstrap";
import UserAndJobCardList from "../components/UserAndJobCardList";
import { loadAllUserData } from "../services/UserService.js";

const UserPage = () => {
  const [users, setUserState] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await loadAllUserData().then((userData) => {
        if (userData) {
          setUserState(userData);
        }
      });
    };
    loadData();
  }, []);

  return (
    <Container style={{ marginTop: 20 }}>
      <Row>
        <Col sm={{ size: 5 }}>
          <UserAndJobCardList users={users} />
        </Col>
      </Row>
    </Container>
  );
};
export default UserPage;
