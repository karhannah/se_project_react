import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./UserPlaceHolder.css";
// error from here
// UserPlaceHolder.js:21 Uncaught TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
//     at Function.from (<anonymous>)
//     at UserPlaceHolder (UserPlaceHolder.js:21:1)
//     at renderWithHooks (react-dom.development.js:16324:1)
//     at mountIndeterminateComponent (react-dom.development.js:20093:1)
//     at beginWork (react-dom.development.js:21605:1)
//     at HTMLUnknownElement.callCallback (react-dom.development.js:4179:1)
//     at Object.invokeGuardedCallbackDev (react-dom.development.js:4230:1)
//     at invokeGuardedCallback (react-dom.development.js:4293:1)
//     at beginWork$1 (react-dom.development.js:27470:1)
//     at performUnitOfWork (react-dom.development.js:26576:1)
// react-dom.development.js:18708 The above error occurred in the <UserPlaceHolder> component:

//     at UserPlaceHolder (http://localhost:3000/static/js/bundle.js:4937:3)
//     at div
//     at div
//     at header
//     at Header (http://localhost:3000/main.033430831e862afde82b.hot-update.js:41:3)
//     at App (http://localhost:3000/main.66d2c3773be8264c6055.hot-update.js:64:88)
//     at Router (http://localhost:3000/static/js/bundle.js:41320:30)
//     at e (http://localhost:3000/static/js/bundle.js:40583:26)

// Consider adding an error boundary to your tree to customize error handling behavior.
// Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
const UserPlaceHolder = ({ isLoggedIn }) => {
  const { currentUser } = React.useContext(CurrentUserContext);

  const userStr = JSON.stringify(currentUser.name);
  const initial = Array.from(userStr)[1];
  console.log(initial);

  const avatarClassname = `user__avatar-placeholder ${
    isLoggedIn
      ? "user__avatar-placeholder_visible"
      : "user__avatar-placeholder_hidden"
  }`;

  return <div className={avatarClassname}>{initial}</div>;
};

export default UserPlaceHolder;

// {initial}
