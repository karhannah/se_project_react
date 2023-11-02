import ItemModal from "../ItemModal/ItemModal";
import currentDate from "../Date/Date";
import { useEffect, useState } from "react";
import "./App.css";

// image imports
import headerLogo from "../images/headerLogo.svg";
import AvatarLogo from "../images/headerAvatar.svg";

const APIkey = "039e78b473a24e26b14a84073cc259b5";

function App() {
  const [location, setLocation] = useState();

  function getLocationInfo(latitude, longitude) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status.code === 200) {
          console.log("results:", data.results);
          setLocation(data.results[0].formatted);
        } else {
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  }
  function success(pos) {
    let crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getLocationInfo(crd.latitude, crd.longitude);
  }
  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={headerLogo} alt="Logo" />
          </div>
          <div>{currentDate}</div>
          <div>{}</div>
        </div>
        <div className="header__avatar-logo">
          <div>
            <button className="header__button-add-clothes" type="button">
              + Add Clothes
            </button>
          </div>
          <div>Terrence Tegegne</div>
          <div>
            <img src={AvatarLogo} alt="Avatar" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
