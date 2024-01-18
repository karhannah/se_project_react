import React from "react";

const CurrentUserContext = React.createContext({
  currentUserId: "",
  handleUserIdChange: () => {},
});

export default CurrentUserContext;
