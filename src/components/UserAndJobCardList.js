import React from "react";
import UserAndJobCard from "./UserAndJobCard";

const UserAndJobCardList = (props) => {
  return [
    props.users.map((user, index) => {
      return (
        <UserAndJobCard
          user={user}
          index={index}
          refreshPage={props.refreshPage}
        />
      );
    }),
  ];
};
export default UserAndJobCardList;
