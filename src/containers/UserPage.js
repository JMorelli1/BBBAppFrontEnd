import React, {useState, useEffect} from 'react';
import Header from '../components/Header/Header.js';
import {
  Row, Container, Col
} from 'reactstrap';
import axios from 'axios';
import UserAndJobCardList from '../components/UserAndJobCardList';

const UserPage = () =>{

    const [users, setUserState] = useState([]);

    useEffect(() =>{
        const loadData = async () => {
            try{ 
                const response = await axios.get("/api/users");
                setUserState(response.data);
             }
              catch(Exception){
                console.log(Exception);
             }
        }
        loadData();
    },[]);
    return(
      <>
      <Header />
        <Container style={{marginTop: 20}}>
          <Row>
            <Col sm={{ size: 10}}>
              <UserAndJobCardList users={users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
export default UserPage;