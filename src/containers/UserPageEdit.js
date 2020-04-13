import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';
import Header from '../components/Header/Header.js';
import Axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const UserPageEdit = () => {

    const {userId} = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const history = useHistory();
    const [displayAlert, setDisplayAlert] = useState(false);

    const userApiEndPoint = `/api/users/${userId}`;

    useEffect(()=>{
        const loadData = async () => {
            const response = await Axios.get(userApiEndPoint);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setPhoneNumber(response.data.phoneNumber);
        }
        loadData();
    },[userApiEndPoint])

    const handleChange = event => {
        const value = event.target.value;
        switch(event.target.name){
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async () =>{
        try{
            await Axios.put(userApiEndPoint, {
                'firstName'  : firstName,
                'lastName'   : lastName,
                'email'      : email,
                'phoneNumber': phoneNumber,
            }).then(res => {
                console.log(res);
                console.log(res.data);
            })
            setDisplayAlert(true);
        }   
        catch(error){
            console.log("Error updating user" + error);
        }
    }

    return(
        <div style={{textAlign: "left"}}>
        <Header />
        <Container>
        <Button onClick={()=>{history.push('/users')}}>Return</Button>
            <Alert color='success' isOpen={displayAlert}>
                <p>
                    Congragulations! Your User was successfully updated!
                </p>
            </Alert>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type='text' defaultValue={firstName} id="firstName" name="firstName" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label>Last Name</Label>
                <Input type='text' defaultValue={lastName} name="lastName" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input type='text' defaultValue={email} name="email" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label>Phone Number</Label>
                <Input type='text' defaultValue={phoneNumber} name="phoneNumber" onChange={handleChange} />
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
        </Container>
        </div>
    );
}
export default UserPageEdit;