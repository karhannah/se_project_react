import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import React, { useEffect, useState } from "react";
import {
  getWeatherAndLocation,
  locationData,
  parseWeatherData,
} from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import {
  getItems,
  postItems,
  deleteItems,
  likeCard,
  likeRemove,
} from "../../utils/api";

// import login and register modals here
import Register from "../RegisterModal/RegisterModal";
import Login from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedcard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, isLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const token = localStorage.getItem("token");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleDeleteOpenModal = () => {
    setActiveModal("delete");
  };
  const handleRegisterModal = () => {
    setActiveModal("register");
  };
  const handleEditProfileModal = () => {
    setActiveModal("edit");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCardLike = async ({ id, isLiked }) => {
    try {
      let updatedCard;
      // destucture inner card values
      if (isLiked) {
        const { data, ...props } = await likeCard(id, token);
        updatedCard = { ...data, ...props, isLiked: true };
      } else {
        await likeRemove(id, token);
        const cardToUpdate = clothingItems.find((c) => c._id === id);

        if (cardToUpdate) {
          const { data, ...props } = await likeRemove(id, token);
          updatedCard = { ...data, ...props, isLiked: false };
        } else {
          console.error(`Card with id ${id} not found in clothingItems.`);
          return;
        }
      }

      setClothingItems((cards) =>
        cards.map((c) => (c._id === id ? updatedCard : c))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCard = async () => {
    try {
      await deleteItems(selectedcard._id, token);
      setClothingItems((prevItems) =>
        prevItems.filter((item) => item._id !== selectedcard._id)
      );
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const onAddItem = async (values) => {
    try {
      const res = await postItems(values, token);
      setClothingItems((prevItems) => [res, ...prevItems]);
      handleCloseModal();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    const handleOverlayClick = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };
    document.addEventListener("mousedown", handleOverlayClick);
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [activeModal]);

  useEffect(() => {
    getWeatherAndLocation()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const city = locationData(data);
        setTemp(temperature);
        setCity(city);
        // setType(parseWeatherType(data))
        // setTime(Date.now())
      })
      .catch((error) => {
        console.error("Error: An error occurred", error);
      });
  }, []);

  useEffect(() => {
    if (token) {
      auth
        .checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((error) => {
        console.error("Error: An error occurred", error);
      });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ setCurrentUser, currentUser }}
      path="/profile"
    >
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreate={handleCreateModal}
          city={city}
          currentDate={currentDate}
          setCurrentUser={currentUser}
          isLoggedIn={loggedIn}
        ></Header>

        <Switch>
          <ProtectedRoute loggedIn={loggedIn} path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              onCreate={handleCreateModal}
              onCardLike={handleCardLike}
            ></Profile>
          </ProtectedRoute>

          <Route path="/register">
            <Register
              onClose={handleCloseModal}
              onClick={handleRegisterModal}
              isLoggedIn={isLoggedIn}
            />
          </Route>

          <Route path="/login">
            <Login
              handleCloseModal={handleCloseModal}
              isLoggedIn={isLoggedIn}
            ></Login>
          </Route>

          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              setClothingItems={clothingItems}
              onCardLike={handleCardLike}
            />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            setActiveModal={activeModal === "create"}
            onAddItem={onAddItem}
            loggedIn={loggedIn}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedcard}
            onClose={handleCloseModal}
            onClick={handleDeleteOpenModal}
            currentUser={currentUser}
          />
        )}
        {activeModal === "delete" && (
          <DeleteItemModal
            onClose={handleCloseModal}
            deleteCard={handleDeleteCard}
          />
        )}
        {activeModal === "edit" && (
          <EditProfileModal onClick={handleEditProfileModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}
// withRouter(App)
export default App;
