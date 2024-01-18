import React from "react";
import { Route, Redirect } from "react-router-dom";
import Profile from "../components/Profile/Profile";

const CurrentUserContext = ({ isLoggedIn }) => {
  return <Route>{isLoggedIn ? <Profile /> : <Redirect to="/login" />}</Route>;
};

export default CurrentUserContext;
