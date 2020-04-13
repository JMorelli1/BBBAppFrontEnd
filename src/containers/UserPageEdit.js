import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Header from '../components/Header/Header.js';
import { useParams, useHistory } from 'react-router-dom';
import DisplayAlert from '../components/DisplayAlert.js';
import { updateUser, loadUserData } from '../services/UserService.js';

const UserPageEdit = () => {

    const {userId} = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const history = useHistory();
    const [displayAlert, setDisplayAlert] = useState(false);
    const [alertStatus, setAlertStatus] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(()=>{
        const loadData = async () =>{
            await loadUserData(userId)
            .then(userData => {
                if(!userData){
                    setAlertStatus('fail');
                    setAlertMessage('There was an error uploading the user!')
                    setDisplayAlert(true);
                }else{
                setFirstName(userData.firstName);
                setLastName(userData.lastName);
                setEmail(userData.email);
                setPhoneNumber(userData.phoneNumber);
                }
            }
            )
        }
        loadData();
        return ()=>{console.log("unmounted")}
    },[])

    const setAlert = () => {
        setAlertStatus('success');
        setAlertMessage('Congragulations, you successfully updated user!')
        setDisplayAlert(true);
    }

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

    const handleSubmit = async event =>{
        event.preventDefault();
        const newUser = {firstName, lastName, email, phoneNumber};
        await updateUser(userId, newUser)
        .then(successfullyUpdated => {
            if(successfullyUpdated){
                setAlert();
            }
        })
    }

    return(
        <div style={{textAlign: "left"}}>
        <Header />
        <Container>
        <Button onClick={()=>{history.push('/users')}}>Return</Button>
        <DisplayAlert status={alertStatus} showAlert={displayAlert} message={alertMessage} />
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