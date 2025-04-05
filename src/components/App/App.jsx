import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants.js";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { getWeather, filterWeatherData } from "../../utils/WeatherAPI.js";
import Footer from "../Footer/Footer.jsx";
import { CurrentTemperatureUnitContext } from "../../utils/Contexts/CurrentTemperatureUnitContext.jsx";
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ModifyProfileModal from "../ModifyProfileModal/ModifyProfileModal";
import Profile from "../Profile/Profile.jsx";
import { getItems, addItem, deleteItem, addCardLike, removeCardLike } from "../../utils/api.js";
import { signup, signin, validateToken, modifyProfile } from "../../utils/auth";

function App() {
	const [ weatherData, setWeatherData ] = useState({
		type: "",
		temp: { F: 999 },
		city: "",
	});
	
	const [ activeModal, setActiveModal ] = useState("");
	const [ selectedCard, setSelectedCard ] = useState({  });
	const [ currentTemperatureUnit, setCurrentTemperatureUnit ] = useState('F');
	const [ clothingItems, setClothingItems ] = useState([ ]);
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);
	const [ currentUser, setCurrentUser ] = useState({ _id: "", email: "", name: "", avatar: "" })
	const [ authToken, setAuthToken ] = useState("");

	const handleCardClick = (card) => {
		setActiveModal("preview");
		setSelectedCard(card);
	}
	
	const handleAddClick = () => {
		setActiveModal("add-garment");
	}

	const handleDeleteClick = () => {
		deleteItem(selectedCard._id, authToken).then(() => {
			setClothingItems(
				clothingItems.filter((item) => {
					return item._id !== selectedCard._id;
				})
			)
			closeActiveModal();
		}).catch(console.error);
	}

	const handleModifyProfile = (values) => {
		modifyProfile(values, authToken).then((data) => {
			setCurrentUser(data);
			closeActiveModal();
		}).catch(console.error);
	}

	const handleModifyProfileClick = (values) => {
		setActiveModal("modify-profile");
	}

	const handleLogin = (values) => {
		signin(values).then((data) => {
			localStorage.setItem("jwt", data.token);
			setIsLoggedIn(true);
			closeActiveModal();
		}).catch(console.error);
	}
	
	const handleRegister = (values) => {
		signup(values).then((data) => {
			handleLogin({ email: values.email, password: values.password });
		}).catch(console.error);
	}

	const closeActiveModal = () => {
		setActiveModal("");
	}

	const renderCards = () => {
		getItems().then((data) => {
			setClothingItems(data);
		}).catch(console.error);
	}
	
	const onAddItem = (values) => {
		addItem(values, authToken).then((data) => {
			setClothingItems(
				[ { _id: data._id,
					name: values.name,
					imageUrl: values.imageUrl,
					weather: values.weather,
					owner: currentUser._id,
					likes: data.likes
				  }, ...clothingItems ]
			)
			closeActiveModal();
		}).catch(console.error);
	}

	const handleUserChange = (user) => {
		setCurrentUser(user);
	}

	const handleToggleSwitchChange = () => {
		if (currentTemperatureUnit === 'C') setCurrentTemperatureUnit('F');
		if (currentTemperatureUnit === 'F') setCurrentTemperatureUnit('C');
	}

	const handleLoginClick = () => {
		setActiveModal('login');
	}

	const handleRegisterClick = () => {
		setActiveModal('register');
	}

	const onLogin = (values) => {
		handleLogin(values);
	}

	const onRegister = (values) => {
		handleRegister(values);
	}

	const handleSignoutClick = () => {
		localStorage.removeItem("jwt");
		setIsLoggedIn(false);
		setCurrentUser({ name: "", email: "", _id: "", avatar: ""});
	}

	const handleCardLike = ({ id, isLiked }) => {
		const token = localStorage.getItem("jwt");
		// Check if this card is not currently liked
		!isLiked
			? // if so, send a request to add the user's id to the card's likes array
			// the first argument is the card's id
			addCardLike(id, token)
				.then((updatedCard) => {
					setClothingItems((cards) =>
						cards.map((item) => (item._id === id ? updatedCard : item))
					);
				})
				.catch((err) => console.log(err))
			: // if not, send a request to remove the user's id from the card's likes array

			// the first argument is the card's id
			removeCardLike(id, token)
				.then((updatedCard) => {
					setClothingItems((cards) =>
						cards.map((item) => (item._id === id ? updatedCard : item))
					);
				})
				.catch((err) => console.log(err));
	};

	const ProtectRoute = ({ isLoggedIn, children }) => {
		if (!isLoggedIn) {
			return <Navigate to = "" replace />
		}

		return children;
	}

	useEffect(() => {
		validateToken(localStorage["jwt"]).then((data) => {
			setAuthToken(localStorage["jwt"]);
			setCurrentUser(data);
			setIsLoggedIn(true);
		}).catch(console.error);
	}, []);
	
	useEffect(() => {
		getWeather(coordinates, APIkey).then((data) => {
			const filteredData = filterWeatherData(data);
			setWeatherData(filteredData);
		}).catch(console.error);
	}, []);

	useEffect(() => {
		renderCards();
	}, []);
	
	return (
		<div className="page">
			<CurrentUserContext.Provider value = {{ currentUser }}>
				<CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }} >
					<div className="page__content">
						<Header isLoggedIn = {isLoggedIn}
								handleLoginClick={handleLoginClick}
								handleRegisterClick={handleRegisterClick}
								handleAddClick={handleAddClick}
								setActiveModal={setActiveModal}
								weatherData={weatherData} />

						<Routes>
							<Route path = "" element = {
								<Main weatherData = { weatherData }
									  handleCardClick = { handleCardClick }
									  clothingItems = { clothingItems }
									  onCardLike = { handleCardLike }
								/>
							}
							/>

							<Route path="/profile" element={
								<ProtectedRoute isLoggedIn={isLoggedIn}>
									<Profile handleAddClick={handleAddClick}
										onModifyProfileClick={handleModifyProfileClick}
										onSignoutClick={handleSignoutClick}
										onCardClick={handleCardClick}
										onCardLike={handleCardLike}
										clothingItems={clothingItems}
									/>
								</ProtectedRoute>
							}

							/>

							<Route path="*" element={ <Navigate to = "/" /> } />
						</Routes>

						<Footer />
					</div>
					<ItemModal activeModal = { activeModal }
							   card = { selectedCard }
							   onClose = { closeActiveModal }
							   onDeleteItem = { handleDeleteClick }
					/>
					
					<LoginModal activeModal={activeModal}
						handleRegisterClick={handleRegisterClick}
						onClose={closeActiveModal}
						onLogin={onLogin}
					/>

					<RegisterModal activeModal={activeModal}
						handleLoginClick={handleLoginClick}
						onClose={closeActiveModal}
						onRegister={onRegister}
					/>

					<ModifyProfileModal activeModal = { activeModal }
										onClose = { closeActiveModal }
										onModifyProfile = { handleModifyProfile }
					/>

					<AddItemModal activeModal={activeModal}
						onClose={closeActiveModal}
						onAddItem={onAddItem}
					/>


				</CurrentTemperatureUnitContext.Provider>
			</CurrentUserContext.Provider>
		</div>
    );
}

export default App;
