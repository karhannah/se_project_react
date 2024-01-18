import React from "react";
import { Route, Redirect } from "react-router-dom";

const CurrentUserContext = ({ isLoggedIn, children, path }) => {
  return (
    <Route path={path}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default CurrentUserContext;
