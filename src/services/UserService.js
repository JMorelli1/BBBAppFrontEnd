import Axios from 'axios';

export const loadUserData = async (userId) =>{

    return Axios.get(`/api/users/${userId}`)
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.error(error);
            return false;
        })
}

export const loadAllUserData = async () => {
        return Axios.get('/api/users')
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.error(error);
            return false;
        })
}

export const updateUser = async (userId, newUser) =>{
    return Axios.put(`/api/users/${userId}`, {
        'firstName'  : newUser.firstName,
        'lastName'   : newUser.lastName,
        'email'      : newUser.email,
        'phoneNumber': newUser.phoneNumber,
    }).then(res => {
        console.log(res.status);
        console.log(res.data);
        if(res.status === 200){
            return true;
        }
    }).catch(error => {
        console.log(error);
        return false;
    })
}