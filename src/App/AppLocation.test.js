import React, { Component } from "react";
const APIkey = "039e78b473a24e26b14a84073cc259b5";
class LocationInfo extends Component {
  state = {
    location: "",
    data: [],
  };

  componentDidMount() {
    this.getLocationInfo();
  }

  getLocationInfo = () => {
    const { APIkey } = this.props; // Make sure to pass your API key as a prop

    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            this.success,
            this.errors,
            options
          );
        } else if (result.state === "denied") {
          // Handle denied state
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  success = (pos) => {
    const crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude: ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    this.getLocationData(crd.latitude, crd.longitude);
  };

  errors = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  getLocationData = (latitude, longitude) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${this.props.APIkey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          console.log("results:", data.results);
          this.setState({ data: data });
          this.setState({ location: data.results[0].formatted });
        } else {
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <p>Location: {this.state.location}</p>
        {/* Display other location data here */}
      </div>
    );
  }
}

export default LocationInfo;
