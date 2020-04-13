import React, { useEffect } from 'react';
import UserCard from './UserCard';

const UserCardList = (props) => {
  return (
      <>
        {props.users.map(user => <UserCard key={user.userId} {...user} />)}
      </>
    );
  }
export default UserCardList;