import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./UserPlaceHolder.css";

const UserPlaceHolder = ({ isLoggedIn }) => {
  const { currentUser } = React.useContext(CurrentUserContext);

  if (!currentUser || !currentUser.name) {
    return null;
  }

  try {
    const userStr = JSON.stringify(currentUser.name);
    const initial = Array.from(userStr)[1];
    console.log(initial);

    const avatarClassname = `user__avatar-placeholder ${
      isLoggedIn
        ? "user__avatar-placeholder_visible"
        : "user__avatar-placeholder_hidden"
    }`;

    return <div className={avatarClassname}>{initial}</div>;
  } catch (error) {
    console.error("Error in UserPlaceHolder component: ", error);
    return null;
  }
};

export default UserPlaceHolder;
