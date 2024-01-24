// import { useState, useEffect } from "react";

// const APIkey = "039e78b473a24e26b14a84073cc259b5";

// const [location, setLocation] = useState();
// const [data, setData] = useState([]);

// function getLocationInfo(latitude, longitude) {
//   const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       setData(data);
//       if (data.status.code === 200) {
//         setLocation(data.results[0].formatted);
//       } else {
//         console.log("Reverse geolocation request failed.");
//       }
//     })
//     .catch((error) => console.error(error));
// }
// function success(pos) {
//   let crd = pos.coords;
//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
//   getLocationInfo(crd.latitude, crd.longitude);
// }
// function errors(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }
// let options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };
// useEffect(() => {
//   if (navigator.geolocation) {
//     navigator.permissions
//       .query({ name: "geolocation" })
//       .then(function (result) {
//         console.log(result);
//         if (result.state === "granted") {
//           navigator.geolocation.getCurrentPosition(success, errors, options);
//         } else if (result.state === "prompt") {
//           navigator.geolocation.getCurrentPosition(success, errors, options);
//         } else if (result.state === "denied") {
//         }
//       });
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }
// }, []);

// // Code for weather api, that I can't figure out how to work
// function Weather() {
//   const [latitude, setLat] = React.useState("");
//   const [longitude, setLong] = React.useState("");
//   const [city, setCity] = React.useState("");
//   React.useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       setLat(position.coords.latitude);
//       setLong(position.coords.longitude);
//     });

//     let WeatherFinalAPIEndPoint = `${WeatherAPIEndPoint}lat=${latitude}&lon=${longitude}&appid=${WeatherAPIKey}`;

//     axios.get(WeatherFinalAPIEndPoint).then((response) => {
//       setCity(city.data);
//     });
//   }, []);
//   return (
//     <div>
//       <h1>{setCity.name}</h1>
//     </div>
//   );
// }

// export default Weather;

// const [isLoading, setIsLoading] = React.useState(false);
// ^^ add later for better code

// old code for register
// register(values).then(setCurrentUser(currentUser));

// try {
//   const res = await register(values);
// } catch (error) {
//   console.log(error);
// }
// .then(() => {
//   setCurrentUser(currentUser);
// });
// .then(isLoggedIn(true));
// console.log(res); // undefined

//  maybe maybe not use for login
// const getCurrentUserId = async () => {
//   try {
//     const userId = await getCurrentUser(currentUser._id);
//     console.log(userId);
//   } catch (error) {
//     console.log(error);
//   }
// };

// recomend taking a look at

// our protected routes should look like this // notice that we're
// passing userData to the second route
// <ProtectedRoute
//   path="/ducks"
//   loggedIn={this.state.loggedIn}
//   component={Ducks}
// />
// <ProtectedRoute
//   path="/my-profile"
//   loggedIn={this.state.loggedIn}
//   userData={this.state.userData}
//   component={MyProfile}
// />

// code that makes it impossible to see anything but the login modal
// if not authorized
{
  loggedIn ? (
    <Main
      weatherTemp={temp}
      onSelectCard={handleSelectedCard}
      setClothingItems={clothingItems}
    />
  ) : (
    <Redirect to="/login" />
  );
}

// code that you need later to auto signin and remember users later
// work on function below to get the user token
// for login
// inside of App.js

// tokenCheck() {
//   // if the user has a token in localStorage,
//   // this function will check that the user has a valid token
//   const jwt = localStorage.getItem('jwt');
//   if (jwt) {
//     // we'll verify the token
//     auth.getContent(jwt).then((res) => {
//       if (res) {
//         // we can get the user data here!
//         const userData = {
//           username: res.username,
//           email: res.email
//         }
//         // let's put it in the state inside App.js
//         this.setState({
//           loggedIn: true,
//           userData
//         }, () => {
//           this.props.history.push('/ducks');
//         });
//       }
//     });
//   }
// }

import { createContext, useContext, useState, useEffect } from "react";
/**
 * auth = getAuth()
 * provider = new GoogleAuthProvider()
 */
import { auth, provider } from "providers/firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { api } from "providers/axios";
import { useLoading } from "providers/loading";

const UserContext = createContext(null);
export const useAuth = () => useContext(UserContext);

const verifyToken = (token) =>
  api({
    method: "post",
    url: "/user/auth",
    headers: {
      token,
    },
  });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const { loading, setLoading } = useLoading();

  const signIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("auth signInWithPopup", result.user.email);
    } catch (e) {
      setUser(null);
      console.error(e);
      setLoading(false);
    }
  };

  const signOut = async () => {
    let userSigningOut = user;
    try {
      await firebaseSignOut(auth);
      setUser(null);
      console.log("signed out");
    } catch (e) {
      console.error(e);
    } finally {
      return (userSigningOut = null);
    }
  };

  const verifyUser = async (user) => {
    try {
      if (!user) {
        throw "no user";
      }

      const token = await getAuth().currentUser.getIdToken(true);
      if (!token) {
        throw "no token";
      }

      const jwt = await getAuth().currentUser.getIdTokenResult();
      if (!jwt) {
        throw "no jwt";
      }

      const verifyTokenResponse = await verifyToken(token);
      if (verifyTokenResponse.data.role !== jwt.claims.role) {
        throw "role level claims mismatch";
      } else {
        user.verifiedToken = verifyTokenResponse.data;
        console.log(`User ${user.uid} verified`);
        setUser(user);
      }
    } catch (e) {
      signOut();
      console.error(e);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      try {
        if (user) {
          console.log("onAuthStateChanged", user?.email);
          await verifyUser(user);
        } else {
          throw "no user";
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{
        signIn,
        signOut,
        user,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
