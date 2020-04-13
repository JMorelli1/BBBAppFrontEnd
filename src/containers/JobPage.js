import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header.js';
import JobCardList from '../components/JobCardList';
import { Container, Col, Row } from 'reactstrap';
import Axios from 'axios';

const JobPage = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await Axios.get('/api/jobs');
            setJobs(response.data);
        }
        loadData();
    }, [])

    return(
        <>
            <Header />
            <Container style={{marginTop: 20}}>
                <Row>
                    <Col sm={{ size: 10}}>
                        <JobCardList postedJobs={jobs} showUser={true} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default JobPage;