import React from 'react';
import Header from '../components/Header/Header';
import '../components/Header/Header.css';
import { Jumbotron, Button } from 'reactstrap';

const Home = () =>{

    return(
        <div>
            <Header />
            <Jumbotron>
                <h1 className="display-3">Welcome to Brothers Brothers Brothers!</h1>
                <p className='lead'>A community sharing app that helps impower small acts of kindness in your local community </p>
                <hr />
                <Button>TODO</Button>
            </Jumbotron>

        </div>
    );
}
export default Home;