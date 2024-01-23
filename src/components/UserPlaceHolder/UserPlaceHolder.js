import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./UserPlaceHolder.css";
const UserPlaceHolder = ({ isLoggedIn }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const user = currentUser;

  const userStr = JSON.stringify(user.data.name);
  const initial = Array.from(userStr)[1];
  console.log(initial);

  return <div className="user__avatar-placeholder">{initial}</div>;
};

export default UserPlaceHolder;
