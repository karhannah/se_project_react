import React from "react";

const CurrentUserContext = React.createContext({
  currentUserId: "",
  isLoggedIn: () => {},
});

export { CurrentUserContext }; // errors
